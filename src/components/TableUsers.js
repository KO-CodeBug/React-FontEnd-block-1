import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

import {fetchAllUser} from '../services/UserServices'
import ReactPaginate from 'react-paginate';


const TableUsers = (props) => {
    const [listUser, setListUsers] = useState([]);
    const [totalUser , setTotalUsers] = useState(0);
    const [totalPages , setTotalPages] = useState(0);


    useEffect(()=>{
        // call API // dry (vô hạn code quá 2 lần code tối ưu)
        getUser(1);
    },[])

    const getUser = async (page) => {
        let res = await fetchAllUser(page);
        console.log('cheack new res' , res);
        
        if(res && res.data ) {
            console.log(res.data);
            setTotalUsers(res.total)
            setTotalPages(res.total_pages)
            setListUsers(res.data)
        }
    }
    console.log(listUser);
    
    const handlePageClick = (event) => {
        getUser(+ event.selected + 1);
        // console.log('cheack event ', event);        
    }
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

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
        </>
    )
}
export default TableUsers;