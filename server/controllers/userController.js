import sql from"../configs/db.js"
export const getUserCreations = async (req , res)=>{
  try{
     const {userId} = req.auth();
     const creations =  await sql `SELECT * FROM creations where user_id = ${userId} ORDER BY created_at DESC`;
     res.json({success : true, creations})
  }
  catch(error){
      res.json({success: false , message: error.message})
  }
}


export const getUserPublished = async (req , res)=>{
  try{
     const creations =  await sql `SELECT * FROM creations where publish = true ORDER BY created_at DESC`;
     res.json({success : true, creations})
  }
  catch(error){
      res.json({success: false , message: error.message})
  }
}


export const toggleLikedCreation = async (req , res)=>{
  try{

      const {userId} = req.auth();
      const {id} = req.body;

      const [creation] = await sql`SELECT * FROM creations WHERE id = ${id}`


    if(!creation)
    {
        return res.json({success : false , message : "Creation not found"})
    }
    const currentLikes = creation.likes;
    const userIdStr = userId.toString();
    let updatedLikes;
    let message;
    if(currentLikes.includes(userIdStr)){
      updatedLikes = currentLikes.filter((user )=>user !== userIdStr);
      message = 'creation unliked'
    }
    else{
      updatedLikes = [...currentLikes,userIdStr]
      message = 'Creation Liked'
    }

    // const formattedArray = `{${updatedLikes.json(',')}}`
    const formattedArray = `{${updatedLikes.join(',')}}`

    await sql `UPDATE creations SET likes = ${formattedArray} :: text[] where id = ${id}`

    res.json({success : true , message})
  }
  catch(error){
      res.json({success: false , message: error.message})
  }
}