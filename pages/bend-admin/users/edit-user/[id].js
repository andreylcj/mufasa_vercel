import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DataContext } from '../../../../store/GlobalState';
import { patchData } from '../../../../assets/utils/fetchData';
import Loading from '../../../../snnipets/Loading';
import { updateItem } from '../../../../store/Actions';
import GoBackButton from '../../../../snnipets/GoBackButton';

function EditUser() {
  const router = useRouter();
  const { id } = router.query;

  const [state, dispatch] = useContext(DataContext);
  const { users, auth, roles } = state;

  const allRoles = roles;
  const { loading } = state;

  const [editUser, setEditUser] = useState([]);
  const [role, setRole] = useState('');

  useEffect(() => {
    users.forEach((user) => {
      if (user._id === id) {
        setEditUser(user);
        setRole(user.role);
      }
    });
  }, [users]);

  const handleUpdate = async () => {
    dispatch({ type: 'START_LOADING' });

    if (Object.keys(auth).length === 0 || (Object.keys(auth).length !== 0 && auth.user.role !== 'master admin')) {
      router.push('/bend-admin/denied-access');
      dispatch({ type: 'END_LOADING' });
      return;
    }

    await patchData(`api/user/${editUser._id}`, { role }, auth.token)
      .then((res) => {
        if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } });

        // eslint-disable-next-line no-var
        var admin = false;
        if (role === 'admin' || role === 'master admin') {
          // eslint-disable-next-line no-var
          admin = true;
        }

        dispatch(updateItem(
          users,
          editUser._id,
          { ...editUser, role, admin },
          'ADD_USERS',
        ));
        return dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
      });
    dispatch({ type: 'END_LOADING' });
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0 && auth.user.role !== 'master admin') {
      router.push('/bend-admin/home');
    }
  }, [auth]);

  return (
    <div className="my-4">

      <GoBackButton />

      <div className="col-md-4 mx-auto my-4 w-100">
        <h2 className="text-secondary">Editar Usuário</h2>

        <div className="my-2">
          <label htmlFor="email" className="me-2">Email</label>
          <input type="text" id="email" defaultValue={editUser.email} disabled />
        </div>

        <div className="my-2">
          <label className="me-2">Role</label>
          <select
            id="role"
            onChange={(e) => { setRole(e.target.value); }}
            className="text-capitalize form-select form-select-sm d-inline-block w-auto"
            value={role}
          >
            {
                            allRoles.map((roleName, index) => (
                              <option
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                                value={roleName}
                                className="text-capitalize"
                              >
                                {role}
                              </option>
                            ))
                        }

          </select>
        </div>

        <button
          type="submit"
          className="btn btn-dark"
          onClick={handleUpdate}
        >
          {
                        loading
                          ? (
                            <>
                              <Loading />
                            </>
                          ) : (
                            'Update'
                          )
                    }
        </button>
      </div>

    </div>
  );
}

export default EditUser;
