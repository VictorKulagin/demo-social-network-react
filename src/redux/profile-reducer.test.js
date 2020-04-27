import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
//import { render } from '@testing-library/react';
import React from 'react';


it('length of post should be incremented', () => {
    let action = addPostActionCreator("it-kamasutra.ru");
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Hi, how are you?', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Data', likesCount: 11}
        ]
    };

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);

});

/*it('correct `it-kamasutra.ru`', () => {
    let action = addPostActionCreator("it-kamasutra.ru");


    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe("it-kamasutra.ru");

});*/

it('after deleting length of messages be decrement', () => {
    let action = deletePost(1);

    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Hi, how are you?', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Data', likesCount: 11}
        ]
    };

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);

});
