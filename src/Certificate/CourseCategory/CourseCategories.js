import React, { useEffect } from 'react'
import './CourseCategories.css'
import Layout from '../Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { categoryApi, deleteCategoryApi } from '../../Store/CourseCategory/useApi'
import {map} from 'lodash'
import { Link, useParams } from 'react-router-dom'

function CourseCategories() {

    const dispatch = useDispatch();
    const params = useParams();

    const {categoryDetails,loading} = useSelector((state)=>({
        categoryDetails: state.categoryReducer.categoryDetails,
        loading: state.categoryReducer.loading,
    }))
    console.log(categoryDetails);

    useEffect(()=>{
        dispatch(categoryApi());
    },[]);

    const categoryTable = categoryDetails.results;

  return (
    <Layout>
    <div className='category-main'>
        <h6>COURSE CATEGORIES</h6>
        <div className="category-content">
            <table style={{width:'100%'}}>
                <tr>
                    <th>#</th>
                    {/* <th>ID</th> */}
                    <th>Course Category Name</th>
                    <th>Designation</th>
                    <th>Action</th>
                </tr>

                {map(categoryTable,(category)=>(                
                <tr>
                    <td><input type="checkbox" name="" id="" /></td>
                    {/* <td>{category.id}</td> */}
                    <td>{category.course_category_name}</td>
                    <td>{category.designation}</td>
                    <td>
                        <Link to={(`/coursecategoryview/${category.id}`)}>
                    <button style={{width:'70px',height:'28px',color:'white',background:'green',border:'none',borderRadius:'8px'}}>View</button>
                    </Link>
                    </td>
                </tr>
                ))}
            </table>
        </div>
    </div>
    </Layout>
  )
}

export default CourseCategories