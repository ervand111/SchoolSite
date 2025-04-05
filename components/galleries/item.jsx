import React from 'react';
import {Image} from "antd";

const Item = ({item}) => {
    return (
        <div  className="item-gallery h-80 overflow-hidden rounded-lg shadow-lg gallery-item">
            <Image
                src={process.env.IMAGE_URL + item?.image}
                alt={`Dance`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                preview={true}
            />
        </div>
    );
};

export default Item;