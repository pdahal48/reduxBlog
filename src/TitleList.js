import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from './Redux/titleActions'
import Post from './Post'

const TitleList = () => {
    const titles = useSelector(store => store.TitleReducer);
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch();

    useEffect(function() {
        async function fetchTitles() {
            await dispatch(getPosts())
            setIsLoading(false)
        }
        if(isLoading) fetchTitles()
    }, [dispatch])

    
  if (isLoading) return <b>Loading</b>;

  if (!isLoading && titles.length === 0) {
    return <b>Please add a post!</b>;
  }

  return (
    <div>
        <Row className="mt-2">
            {titles.map((t) => (
                <Post 
                    key= {t.id}
                    id= {t.id}
                    title = {t.title}
                    description = {t.description}
                />
            ))}
        </Row>
    </div>
  )
}

export default TitleList;