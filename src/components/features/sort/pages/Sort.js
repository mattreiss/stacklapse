import React, { Component } from 'react';
import SortForm from '../organisms/SortForm';
import Page from '../../../elements/templates/Page';
import Card from '../../../elements/templates/Card';

class Sort extends Component {
  render() {
    return (
        <Page>
          <Card>
            <SortForm />
          </Card>
        </Page>
    );
  }
}

Sort.route = '/sort';

export default Sort;
