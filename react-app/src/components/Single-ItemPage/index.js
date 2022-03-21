import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
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
    const [added, setadded] = useState(false);


  const userId = useSelector((state) => state.session.user.id);
  const item = useSelector(state => state.itemreducer.currentItem);
  const comments = useSelector(state => state.commentReducer.list);
  const items = useSelector((state) => state.chartReducer.items)
  const dispatch = useDispatch();
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
      backgroundColor: "var(--sp-dark)",
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
      (async() => {
          await dispatch(get_item(itemId));
          await dispatch(getComments(itemId));
          await dispatch(getChart(userId))

          items.map((ite) =>{
            if(ite.id === item.id){
              setadded(true)
            }
          })
        })();
    }, [dispatch]);
    
    const addchart = async(e) =>{
      e.preventDefault();

      let obj = {
        user_id: id,
        item_id: parseInt(itemId)
      }
      setadded(true)
      await dispatch(addToChart(obj))
    }

    console.log(added)
    

  return (
      <div >
        <div className='singlepage'>
        <div>
          <img src={`${item.image}`}/>
        </div>
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>${item.cost}</p>
          {item.in_stock < 4 && <p className='short'>There is {item.in_stock} left in stock</p>}
          {!added && <button disabled={item.in_stock !== 0 ? false : true} onClick={addchart}>ADD TO CHART</button>}
          {added && <p>Available in your chart</p>}
        </div>
        </div>
          <div className="page"> 
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
      </div>
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