import React from 'react';
import {useQuery} from '@apollo/client';
import {COUNTRIES_QUERY, tableHead} from "../../box/constants";
import CountryData from "../../box/types";
import {Table} from 'antd';
import 'antd/dist/antd.css';
import './TableContainer.scss';
import Spinner from "../Spinner/Spinner";

export default function TableContainer() {
    const {data, loading, error} = useQuery<CountryData>(COUNTRIES_QUERY);
    const countries = data?.countries.map((item) => {
        return {...item, continentName: item.continent.name};
    });

    return <div className="table-container">
        {(loading || error) ? (
            <Spinner/>
        ) : (
            <Table dataSource={countries} columns={tableHead}/>
        )}
    </div>
}