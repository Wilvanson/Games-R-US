import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, useHistory} from 'react-router-dom';
import { get_item } from '../../store/item';
import { getComments } from '../../store/comments';
import Modal from "react-modal";
import EditFrom from '../EditCommentPage';
import DeleteCommentFrom from '../DeleteCommentPage';
import CommentFrom from '../AddCommentPage';
import {addToChart, getChart} from '../../store/chart';

function SingleItemPage(){


    const { itemId } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [isDOpen, setIsDOpen] = useState(false);
    const [isAOpen, setIsAOpen] = useState(false);
    const [value, setvalue] = useState();
    const [error, setError]= useState([])

    

  const userId = useSelector((state) => state.session.user.id);
  const item = useSelector(state => state.itemreducer.currentItem);
  const comments = useSelector(state => state.commentReducer.list);
  const items = useSelector((state) => state.chartReducer.items);
  
  
  const dispatch = useDispatch();
  const history = useHistory();
  const id = parseInt(userId)

  
   

  const openModal = () => {
    setIsOpen(true);
  };

  function afterOpenModal() {
    
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  const openDModal = () => {
    setIsDOpen(true);
  };

  function afterOpenDModal() {

  }

  const closeDModal = () => {
    setIsDOpen(false);
  };

  const openAModal = () => {
    setIsAOpen(true);
  };

  function afterOpenAModal() {
    
  }

  const closeAModal = () => {
    setIsAOpen(false);
  };

  const customStyles = {
    content: {
      backgroundcolor: 'rgba(255, 255, 128, .5)',
      borderRadius: "10px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  useEffect(() => {
          dispatch(get_item(itemId));
          dispatch(getComments(itemId));
          dispatch(getChart(userId))
    }, [dispatch]);

    useEffect(()=>{
      // don't know why this works 
      setError([])
      items.map((ite) =>{
        if(ite.id === item.id){
          let er = []
          er.push('Item is already in your chart')
          setError(er)
        }
      })
      
      
    }, [dispatch, items, item])

    
    const addchart = async(e) =>{
      e.preventDefault();
      let err = []
      err.push('Item is already in your chart')
      setError(err)
      if(error.length === 0){
        let obj = {
          user_id: id,
          item_id: parseInt(itemId)
        }
        await dispatch(addToChart(obj))
      }
    }
    

  return (
      <div >
        <div className='singlepage'>
        <div>
          <img src={`${item.image}`}/>
        </div>
        <div>
        {/* <ul>
            {error.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul> */}
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>${item.cost}</p>
          {item.in_stock < 4 && <p className='short'>There is {item.in_stock} left in stock</p>}
          {error.length === 0 && <button disabled={item.in_stock !== 0 ? false : true} onClick={addchart}>ADD TO CART</button>}
          {error.length !== 0 && <p>Available in your cart</p>}
        </div>
        </div>
          {item.id !== 0 && <div className="page"> 
        <h2>Comments</h2>
        <button onClick={openAModal}>ADD A COMMENT</button>

        {comments.map((co)=>{
                return (
                    <div key={co.id} className='comments'>
                      <p >{co.description}</p>
                      {co.user_id === id &&(
                          <div>
                            <button onClick={(e) => {
                                setvalue(co)
                                return openModal(true)}}>EDIT</button>
                            <button onClick={(e) => {
                                  setvalue(co)
                                  return openDModal(true)}}>DELETE</button>
                          </div>
                            
                      )}
                    </div>
                )
            })}
      </div>}
      <Modal
          isOpen={isOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <EditFrom comment={value} hide={closeModal} />
        </Modal>

        <Modal
          isOpen={isDOpen}
          onAfterOpen={afterOpenDModal}
          onRequestClose={closeDModal}
          style={customStyles}
        >
          <DeleteCommentFrom comment={value} hide={closeDModal} />
        </Modal>

        <Modal
          isOpen={isAOpen}
          onAfterOpen={afterOpenAModal}
          onRequestClose={closeAModal}
          style={customStyles}
        >
          <CommentFrom hide={closeAModal} />
        </Modal>
      </div>
  );
};

export default SingleItemPage;