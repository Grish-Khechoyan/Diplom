import { useState } from "react";

import Useravatar from "../../../../src/assets/Images/User-avatar.png";
import "./ViewReview.scss";

export default function ViewReview({ review }) {
  const [expandedContent, setExpandedContent] = useState({});
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const currentDate = new Date();

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([newComment, ...comments]);
      setNewComment("");
    }
  };

  const renderContent = (content, limit, id) => {
    if (content.length >= limit && !expandedContent[id]) {
      return (
        <>
          <p className="px-xl-3">
            {content.substring(0, limit)}
            <button
              style={{ textDecoration: "none", color: "khaki" }}
              className="btn btn-link"
              onClick={() => handleReadMore(id)}>
              Read More
            </button>
          </p>
        </>
      );
    } else {
      return <p className="px-xl-3">{content}</p>;
    }
  };

  const handleReadMore = (id) => {
    setExpandedContent({ ...expandedContent, [id]: true });
  };

  const handleShowAllReviews = () => {
    setShowAllReviews(true);
  };

  return (
    <div className="ViewReview">
      {review && review.results && review.results.length > 0 && (
        <div className="ViewReview_content">
          <div className="feedback-section">
            <h3>Add Your Comment</h3>
            <form onSubmit={handleSubmit}>
              <textarea
                value={newComment}
                onChange={handleChange}
                placeholder="Add your comment"
                rows={4}
                cols={50}
              />
              <br />
              <button className="commentButton " type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="comments-section">
            <h3>REVIEW</h3>

            {comments.map((comment, index) => (
              <div key={index} className="uk-comment">
                <div className="uk-comment-info">
                  <img src={Useravatar} alt="User Avatar" />
                  <div className="uk-comment-info-commentUser">
                    <span>UserName</span>
                    <p>{currentDate.toDateString()}</p>
                  </div>
                </div>
                <p>{renderContent(comment, 200)}</p>
              </div>
            ))}
          </div>
          <div className="uk-comment-list">
            {showAllReviews
              ? review.results.map((rew, index) => (
                  <div key={index} className="uk-comment">
                    <div className="uk-comment-info">
                      <img
                        src={Useravatar}
                        alt="User Avatar"
                        
                      />
                      <div className="uk-comment-info-commentUser">
                        <span>{rew.author}</span>
                        <p>{new Date(rew.created_at).toDateString()}</p>
                      </div>
                    </div>
                    <p>{renderContent(rew.content, 200, rew.id)}</p>
                  </div>
                ))
              : review.results.slice(0, 3).map((rew, index) => (
                  <div key={index} className="uk-comment">
                    <div className="uk-comment-info">
                      <img src={Useravatar} alt="User Avatar" />
                      <div className="uk-comment-info-commentUser">
                        <span>{rew.author}</span>
                        <p>{new Date(rew.created_at).toDateString()}</p>
                      </div>
                    </div>
                    <p>{renderContent(rew.content, 200, rew.id)}</p>
                  </div>
                ))}
          </div>
          {review.results.length > 3 && !showAllReviews && (
            <button className="showAll_button" onClick={handleShowAllReviews}>
              Show All
            </button>
          )}
        </div>
      )}
    </div>
  );
}
