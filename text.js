if(beauty_flag==0){
    var main_url='http://175.178.193.182:8080/article/getHomePage'
    axios.get(main_url).then(function(res){
        var beauty_page_left=document.querySelector('#beauty_page_left')
        var beauty_page_right=document.querySelector('#beauty_page_right')
        for(i=0;i<res.data.pages.彩妆.length;i++){
            console.log(res.data.pages.彩妆[i]);
            var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.pages.彩妆[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.pages.彩妆[i].title+'</p><img src="'+res.data.pages.彩妆[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.pages.彩妆[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.pages.彩妆[i].likes+'</span></div>'
            var recommend_page_left=document.querySelector('#recommend_page_left')
            var recommend_page_left_11=document.createElement('div')
            recommend_page_left_11.innerHTML = recommend_page_left_0;
            if(beauty_page_right.clientHeight<beauty_page_left.clientHeight){
                beauty_page_right.appendChild(recommend_page_left_11)
                console.log(recommend_page_left_11.clientHeight);
            }else
            /* if(beauty_page_right.clientHeight>=beauty_page_left.clientHeight) */{
                beauty_page_left.appendChild(recommend_page_left_11)
                console.log(recommend_page_left_11.clientHeight);
            }
            recommend_page_left_11.setAttribute('articleId',res.data.pages.彩妆[i].articleId)
            var like=recommend_page_left_11.childNodes[0].childNodes[4]
            var j=0
            for(j=0;j<res.data.pages.彩妆[i].likerList.length;j++){
                if(res.data.pages.彩妆[i].likerList[j]===userId){
                    like.className='likeone'
                    break
                }else{
                    like.className='notlike'
                }
            }
            if(res.data.pages.彩妆[i].likerList.length===0){
                like.className='notlike'
            }
        }
    })
    beauty_flag=1
}
})
var beauty_page_left=document.querySelector('#beauty_page_left')
var beauty_page_right=document.querySelector('#beauty_page_right')
beauty_page_left.addEventListener('click',function(e){
let t=e.target
console.log(t);
var articleId=t.parentNode.parentNode.getAttribute('articleId')
if(t.id==='like'&&t.className==='notlike'){
    var like_number_url='http://175.178.193.182:8080/article/like'
    var like_number_obj={
        userId:userId,
        articleId:articleId
    }
    t.className='likeone'
    axios.post(like_number_url,like_number_obj).then(function(res){
        console.log(res);
    })
    t.nextSibling.innerHTML=parseInt(t.nextSibling.innerHTML)+parseInt(1)
    console.log(t.nextSibling.innerHTML);
}else
if(t.id==='like'&&t.className==='likeone'){
    var unlike_number_url='http://175.178.193.182:8080/article/unlike'
    var unlike_number_obj={
        userId:userId,
        articleId:articleId
    }
    t.className='notlike'
    axios.post(unlike_number_url,unlike_number_obj).then(function(res){
        console.log(res);
    })
    t.nextSibling.innerHTML=parseInt(t.nextSibling.innerHTML)-parseInt(1)
}
})
beauty_page_right.addEventListener('click',function(e){
let t=e.target
console.log(t);
var articleId=t.parentNode.parentNode.getAttribute('articleId')
if(t.id==='like'&&t.className==='notlike'){
    var like_number_url='http://175.178.193.182:8080/article/like'
    var like_number_obj={
        userId:userId,
        articleId:articleId
    }
    t.className='likeone'
    axios.post(like_number_url,like_number_obj).then(function(res){
        console.log(res);
    })
    t.nextSibling.innerHTML=parseInt(t.nextSibling.innerHTML)+parseInt(1)
    console.log(t.nextSibling.innerHTML);
}else
if(t.id==='like'&&t.className==='likeone'){
    var unlike_number_url='http://175.178.193.182:8080/article/unlike'
    var unlike_number_obj={
        userId:userId,
        articleId:articleId
    }
    t.className='notlike'
    axios.post(unlike_number_url,unlike_number_obj).then(function(res){
        console.log(res);
    })
    t.nextSibling.innerHTML=parseInt(t.nextSibling.innerHTML)-parseInt(1)
}
})