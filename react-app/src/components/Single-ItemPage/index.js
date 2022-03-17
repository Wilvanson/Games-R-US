import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { get_item } from '../../store/item';
import { getComments } from '../../store/comments';
import Modal from "react-modal";
import EditFrom from '../EditCommentPage';

function SingleItemPage(){
    const { itemId } = useParams();
    const [isOpen, setIsOpen] = useState(false);
  const userId = useSelector((state) => state.session.user.id);
  const item = useSelector(state => state.itemreducer.currentItem);
  const comments = useSelector(state => state.commentReducer.list);
  const dispatch = useDispatch();
  const id = parseInt(userId)

  const openModal = () => {
    setIsOpen(true);
  };

  function afterOpenModal() {
    console.log("hvfuvhfd");
  }

  const closeModal = () => {
    setIsOpen(false);
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
        })();
    }, [dispatch]);
    

  return (
      <div>
          <h2>{item.name}</h2>
          <img src={`${item.image}`}/>

          <div className="pages">
        <h2>Comments</h2>
        <button >ADD A COMMENT</button>

        {comments.map((co)=>{
                return (
                    <div key={co.id}>
                      <p>{co.description}</p>
                      {/* <p>{co.user_Id === id}</p> */}
                      {co.user_id === id &&(
                          <div>
                            <button onClick={openModal}>EDIT</button>
                            <button >DELETE</button>
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
          <EditFrom hide={closeModal} />
        </Modal>
      </div>
  );
};

export default SingleItemPage;