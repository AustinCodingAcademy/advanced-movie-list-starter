import React from 'react';
import SearchBar from '../index';
import { shallow } from 'enzyme';

describe('SeachBar', () => {

  test('searchbar renders', () => {

    test('has initial value empty string', () => {

      test('triggers change event on user input', () => {
        const handleChangeMock = jest.fn();
        const searchBar = shallow(<SearchBar onChange={handleChangeMock} />);

        searchBar.find('input').first().simulate(
          'change',
          {
            target: {
              value: 'testvalue'
            }
          }
        );

        expect(handleChangeMock.mock.calls).toEqual(
          [
            ['testvalue']
          ]
        );
      });
    });

  });
});
