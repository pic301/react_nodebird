export const initialState={
    mainPosts: [{
        User: {
          id: 1,
          nickname: '최현준',
        },
        content: '첫 번째 게시글',
        img: 'https://cdn.pixabay.com/photo/2019/01/17/23/14/work-3938876_960_720.jpg',
      }],
      imagePath:[],
}

const ADD_POST ="ADD_POST"
const ADD_DUMMY ="ADD_DUMMY"



const addPost = {
   type:ADD_POST,
   data:{
          
   }
}
const addDummy = {
    type:ADD_DUMMY,
    data:{
        content:"hello",
        userId:1,
        user:{
            nickname:"최현준"
        }
           
    }
 }


const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_POST: {
            return{
                ...state
            }
        }
        case ADD_DUMMY:{
           return{ 
            ...state,
            mainPost:[action.data,...state.mainPosts],
        }
    }
        default:{
            return{
                ...state,
            }
        }
    }  
}      
    

export default reducer