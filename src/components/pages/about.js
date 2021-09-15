import React from 'react';
import profilePicture from "../../../static/assets/images/bio/blackAndWhiteSala.png";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
            className="left-column"
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
            <div className="right-column">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae molestiae odit. Eos harum aut, ut numquam magni culpa dolorem consequuntur, cumque, asperiores iure omnis reiciendis. Rerum quam eligendi obcaecati?

                Neque, a libero ad, dolores quia porro impedit eius nihil minus doloribus assumenda ut totam. Impedit in rerum, saepe eius pariatur quia suscipit deleniti mollitia, enim provident nostrum magni assumenda!

                Ab, nostrum tenetur totam sint facilis eveniet atque inventore soluta consectetur fugit non magnam distinctio quod perspiciatis? Harum odio voluptas ad aperiam repellendus nemo, consequuntur veritatis alias eos voluptatem expedita!

                Dolorem explicabo laboriosam in maxime, aut a deleniti quod fugit possimus, consequuntur neque expedita voluptatibus, delectus voluptate repellendus corporis debitis harum doloribus. Explicabo maxime fugiat harum sit cumque, molestias eligendi?

                Autem totam aspernatur, dignissimos quo placeat, quidem quas ex ipsa architecto odit, nemo perspiciatis accusantium. Non nihil recusandae reiciendis. Earum, temporibus incidunt facilis delectus amet sit omnis ea culpa iure!
            </div>
        </div>
    );
}