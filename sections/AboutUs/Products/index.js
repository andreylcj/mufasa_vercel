import React from 'react';
import ServiceProductItem from '../../../snnipets/AboutUs/Products';
import { freeServices, paidServices } from '../../../constants';
import Container from '../../../components/AboutUs/Products';

function Products() {
  return (
    <Container
      id="produtos"
    >
      <Container.Service>
        <h3>
          Serviços Gratuitos
        </h3>
        <Container.FreeService>
          {
              freeServices.map((service, index) => {
                const serviceId = `freeService__${index}`;
                return (
                  <ServiceProductItem
                    key={serviceId}
                    item={service}
                  />
                );
              })
            }
        </Container.FreeService>
      </Container.Service>

      <Container.Service
        style={{
          marginTop: '50px',
        }}
      >
        <h3>
          Serviços Premium
        </h3>
        <Container.FreeService>
          {
            paidServices.map((service, index) => {
              const serviceId = `paidService__${index}`;
              return (
                <ServiceProductItem
                  key={serviceId}
                  item={service}
                />
              );
            })
            }
        </Container.FreeService>
      </Container.Service>

    </Container>
  );
}

export default Products;
