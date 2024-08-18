import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

import {fetchAllUser} from '../services/UserServices'

const TableUsers = (props) => {
    const [listUser, setListUsers] = useState([]);

    useEffect(()=>{
        // call API // dry (vô hạn code quá 2 lần code tối ưu)
        getUser();
    },[])

    const getUser = async () => {
        let res = await fetchAllUser();
        console.log('cheack new res' , res);
        
        if(res && res.data ) {
            setListUsers(res.data)
        }
    }
    console.log(listUser);
    

    return(
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>email</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 && 
                        listUser.map((e, index) => {
                            return(
                                <tr key={`user${index}`}>
                                    <td>{e.id}</td>
                                    <td>{e.email}</td>
                                    <td>{e.first_name}</td>
                                    <td>{e.last_name}</td>
                                </tr>
                            )
                            
                    })}
                   
                    
                </tbody>
            </Table>
        </>
    )
}
export default TableUsers;