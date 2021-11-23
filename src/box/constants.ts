import {gql} from "@apollo/client";
import {Country} from "./types";

export const LIST_COUNTRIES_OBJ = `query Countries {
    countries {
      name
      code
      emojiU
      continent {
        name
      }
    }
  }`;

export const COUNTRIES_QUERY = gql`${LIST_COUNTRIES_OBJ}`;

export const tableHead: Array<object> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        onFilter: (value: string, record: Country): boolean => record.name.indexOf(value) === 0,
        sorter: (a: Country, b: Country) => a.name > b.name ? 1 : -1,
        sortDirections: ['descend','ascend'],
    },
    {
        title: 'Code',
        dataIndex: 'code',
        key: 'code',
        onFilter: (value: string, record: Country): boolean => record.code.indexOf(value) === 0,
        sorter: (a: Country, b: Country) => a.code > b.code ? 1 : -1,
        sortDirections: ['descend','ascend'],
    },
    {
        title: 'Flag',
        dataIndex: 'emojiU',
        key: 'emojiU',
        onFilter: (value: string, record: Country): boolean => record.emojiU.indexOf(value) === 0,
        sorter: (a: Country, b: Country) => a.emojiU > b.emojiU ? 1 : -1,
        sortDirections: ['descend','ascend'],
    },
    {
        title: 'Continent',
        dataIndex: 'continentName',
        key: 'continentName',
        onFilter: (value: string, record: Country): boolean => (record.continentName || '').indexOf(value) === 0,
        sorter: (a: Country, b: Country) => (a.continentName || '') > (b.continentName || '') ? 1 : -1,
        sortDirections: ['descend','ascend'],
    },
]