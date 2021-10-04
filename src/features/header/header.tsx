import React, { FC, useState, useEffect } from "react";
import fetch from 'node-fetch';

type HeaderValue = {
    accountId: string;
    firstName: string;
    lastName: string;
    chargePlan: string;
};

const InitialState: HeaderValue = {
    accountId: "1000",
    firstName: "井手",
    lastName: "啓太",
    chargePlan: "ペンギンプラン",
}

const Header: FC = () => {
    const [headerData, setHeaderData] = useState<HeaderValue>(InitialState);

    useEffect(() => {
        const URL = 'http://localhost:8080/api/aquariummer/getMyAccount';
        const data = [
            {
                "accountId": "100000111",
            }
        ]; 
        const aquariumInit = {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(data),
        };

        fetch(URL, aquariumInit)
        .then(res => res.json())
        .then(json => {
            setHeaderData(JSON.parse(JSON.stringify(json)))
            console.log(JSON.parse(JSON.stringify(json)));
        })
    }, [])

    return (
        <>
            {headerData?.accountId}
            {headerData?.firstName}
            {headerData?.lastName}
            {headerData?.chargePlan}
            ログアウト　※現在開発中
        </>
    );
};

export default Header;