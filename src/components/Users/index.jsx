import React from 'react'
import styles from "./style.module.css";
import userPhoto from "../../assets/images/user.png";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>

        <div>
            {pages.map(p => {
                return <span key={p.id} className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u =>
                <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"
                                     className={styles.userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollowed</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Followed</button>}
                            </div>
                        </span>
                    <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                            </span>
                        </span>
                </div>)
        }
    </div>
}

export default Users