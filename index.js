window.addEventListener('load',function(){
    //登录功能
    var firstpart=document.querySelector('#firstpart');
    var login_form=document.querySelector('#login_form');
    var username=document.querySelector('#username');
    var password=document.querySelector('#password');
    var second=document.querySelector('#second');
    var foot=document.querySelector('#foot')
    var follow_number=document.querySelector('#follow_number')
    var fans_number=document.querySelector('#fans_number')
    var collection_number=document.querySelector('#collection_number')
    var data=document.querySelector('#data')
    var data_back=document.querySelector('#data_back')
    var data_nickname_input=document.querySelector('#data_nickname_input')
    var data_gender_input=document.querySelector('#data_gender_input')
    var data_birthday_input=document.querySelector('#data_birthday_input')
    var data_area_input=document.querySelector('#data_area_input')
    var data_description_input=document.querySelector('#data_description_input')
    var portrait_img=document.querySelector('#portrait_img')
    var portrait_input=document.querySelector('#portrait_input')
    var header_img=document.querySelector('#header_img')
    var header_span=document.querySelector('#header_span')
    var picture=document.querySelector('#picture')
    var picture_div=document.querySelector('#picture_div')
    login_form.addEventListener("submit",function(e){
        e.preventDefault();
        console.log(username.value);
        console.log(password.value);
        var url = 'http://175.178.193.182:8080/login'
             //请求的参数对象
        var dataObj = {username:username.value,password:password.value}
            //调用axios.post()发起POST请求
        axios.post(url,dataObj).then(function(res) {
            console.log(res);
            localStorage.setItem('userId',res.data.userId)
            localStorage.setItem('myID',res.data.userId)
            if(res.data.status===200)
            {
                alert('登录成功');
                firstpart.style.display='none';
                second.style.display='block';
                foot.style.display='block'
                recommend_page_left=document.querySelector('#recommend_page_left')
                recommend_page_right=document.querySelector('#recommend_page_right')
                console.log(recommend_page_right.clientHeight);
                console.log(recommend_page_left.clientHeight);
                var main_url='http://175.178.193.182:8080/article/getHomePage'
                axios.get(main_url).then(function(res){
                    console.log(res.data.pages);
                    recommend_page_left=document.querySelector('#recommend_page_left')
                    recommend_page_right=document.querySelector('#recommend_page_right')
                    for(i=0;i<res.data.pages.推荐.length;i++){
                        console.log(res.data.pages.推荐[i]);
                        var Id=res.data.pages.推荐[i].authorId
                        var url='http://175.178.193.182:8080/user/baseInfo'
                        var hisId={
                            userId:Id
                        }
                        axios.get(url,{params:hisId}).then(function(a){
                            var recommend_page_left_0='<div id="recommend_page_left_1"><img id="recommend_page_head_top" src="'+res.data.pages.推荐[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.pages.推荐[i].title+'</p><img src="'+res.data.pages.推荐[i].avatar+'" alt="" id="recommend_page_head"><span>'+a.data.user.nickname+'</span><span id="like"></span><span id="like_numeber">'+res.data.pages.推荐[i].likes+'</span></div>'
                            console.log(recommend_page_left_0);
                            var recommend_page_left=document.querySelector('#recommend_page_left')
                            var recommend_page_left_11=document.createElement('div')
                            recommend_page_left_11.innerHTML = recommend_page_left_0;
                            if(recommend_page_right.clientHeight<=recommend_page_left.clientHeight){
                                recommend_page_right.appendChild(recommend_page_left_11)
                            }
                            if(recommend_page_right.clientHeight>recommend_page_left.clientHeight){
                                recommend_page_left.appendChild(recommend_page_left_11)
                            }
                            recommend_page_left_11.setAttribute('articleId',res.data.pages.推荐[i].articleId)
                            recommend_page_left_11.setAttribute('authorId',res.data.pages.推荐[i].authorId)
                            var like=recommend_page_left_11.childNodes[0].childNodes[4]
                            var j=0
                            for(j=0;j<res.data.pages.推荐[i].likerList.length;j++){
                                if(res.data.pages.推荐[i].likerList[j]===userId){
                                    like.className='likeone'
                                    break
                                }else{
                                    like.className='notlike'
                                }
                            }
                            if(res.data.pages.推荐[i].likerList.length===0){
                                like.className='notlike'
                            }
                        })
                    }
                })
            }else
            if(res.data.status===406)
            {
                alert('你已经登录过了');
                firstpart.style.display='none';
                second.style.display='block';
                foot.style.display='block'
                recommend_page_left=document.querySelector('#recommend_page_left')
                recommend_page_right=document.querySelector('#recommend_page_right')
                console.log(recommend_page_right.clientHeight);
                console.log(recommend_page_left.clientHeight);
                var main_url='http://175.178.193.182:8080/article/getHomePage'
                axios.get(main_url).then(function(res){
                    console.log(res.data.pages);
                    recommend_page_left=document.querySelector('#recommend_page_left')
                    recommend_page_right=document.querySelector('#recommend_page_right')
                    for(let i=0;i<res.data.pages.推荐.length;i++){
                        console.log(res.data.pages.推荐[i]);
                        var Id=res.data.pages.推荐[i].authorId
                        var url='http://175.178.193.182:8080/user/baseInfo'
                        var hisId={
                            userId:Id
                        }
                        axios.get(url,{params:hisId}).then(function(a){
                            console.log(a);
                            var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.pages.推荐[i].images[0]+'" alt="" id="recommend_page_head_top" ><p id="recommend_page_left_p1">'+res.data.pages.推荐[i].title+'</p><img src="'+res.data.pages.推荐[i].avatar+'" alt="" id="recommend_page_head"><span>'+a.data.user.nickname+'</span><span id="like"></span><span id="like_numeber">'+res.data.pages.推荐[i].likes+'</span></div>'
                            var recommend_page_left=document.querySelector('#recommend_page_left')
                            var recommend_page_left_11=document.createElement('div')
                            recommend_page_left_11.innerHTML = recommend_page_left_0;
                            if(recommend_page_right.clientHeight<=recommend_page_left.clientHeight){
                                recommend_page_right.appendChild(recommend_page_left_11)
                            }
                            if(recommend_page_right.clientHeight>recommend_page_left.clientHeight){
                                recommend_page_left.appendChild(recommend_page_left_11)
                            }
                            recommend_page_left_11.setAttribute('articleId',res.data.pages.推荐[i].articleId)
                            recommend_page_left_11.setAttribute('authorId',res.data.pages.推荐[i].authorId)
                            var like=recommend_page_left_11.childNodes[0].childNodes[4]
                            var j=0
                            for(j=0;j<res.data.pages.推荐[i].likerList.length;j++){
                                if(res.data.pages.推荐[i].likerList[j]===userId){
                                    like.className='likeone'
                                    break
                                }else{
                                    like.className='notlike'
                                }
                            }
                            if(res.data.pages.推荐[i].likerList.length===0){
                                like.className='notlike'
                            }
                        })
                    }
                })   
            }else
            if(res.data.status===400)
            {
                alert('账号或密码错了');
                username.value='';
                password.value='';
            }      
        })
        //获取用户信息
        var userId=localStorage.getItem('userId')
        var the_url='http://175.178.193.182:8080/user/baseInfo'
        var paramsObj={userId:userId}
        axios.get(the_url,{params:paramsObj}).then(function(res){
            console.log(res);
            data_nickname_input.value=res.data.user.nickname
            data_gender_input.value=res.data.user.gender
            data_birthday_input.value=res.data.user.birthday
            data_description_input.value=res.data.user.description
            data_area_input.value=res.data.user.area
            portrait_img.src=res.data.user.avatar
            header_img.src=res.data.user.avatar
            header_span.innerHTML=res.data.user.nickname
            localStorage.setItem('data_nickname_input.value',res.data.user.nickname)
            localStorage.setItem('portrait_img.src',res.data.user.avatar)
        })
        var follow_url='http://175.178.193.182:8080/user/followerList'
        var follow_params={userId:userId}
        axios.get(follow_url,{params:follow_params}).then(function(res){
            console.log(res);
            console.log(res.data.followsList.length);
            follow_number.innerHTML=res.data.followsList.length
        })
        var fans_url='http://175.178.193.182:8080/user/fanList'
        var fans_params={userId:userId}
        axios.get(fans_url,{params:fans_params}).then(function(res){
            console.log(res);
            console.log(res.data.fansList.length);
            fans_number.innerHTML=res.data.fansList.length
        })
        var like_url='http://175.178.193.182:8080/article/getLike'
        var like_params={userId:userId}
        axios.get(like_url,{params:like_params}).then(function(res){
            console.log(res);
            localStorage.setItem('like_number',res.data.likedArticles.length)
        })
        var like_number=localStorage.getItem('like_number')
        console.log(like_number);
        var star_url='http://175.178.193.182:8080/article/getStar'
        var star_params={userId:userId}
        axios.get(star_url,{params:star_params}).then(function(res){
            console.log(res);
            localStorage.setItem('star_number',res.data.staredArticles.length)
        })
        var star_number=localStorage.getItem('star_number')
        console.log(star_number);
        var collection=parseInt(like_number)+parseInt(star_number)
        console.log(collection);
        collection_number.innerHTML=collection
        /* 获取首页数据 */
        var main_url='http://175.178.193.182:8080/article/getHomePage'
        axios.get(main_url).then(function(res){
            console.log(res);
        })
    })
    //回退到主页面
    //var third_span1=document.querySelector('#third_span1');
    //third_span1.addEventListener('click',function(){
    //    title_input.value=''
    //    content_input.value=''
    //    third.style.display='none';
    //    second.style.display='block';
    //    foot.style.display='block'
    //})
    var news=document.querySelector('#news')
    var foot1=document.querySelector('#foot1')
    var foot2=document.querySelector('#foot2')
    var foot3=document.querySelector('#foot3')
    var center=document.querySelector('#center')
    var news=document.querySelector('#news')
    var note_part_left=document.querySelector('#note_part_left')
    var note_part_right=document.querySelector('#note_part_right')
    var userId=localStorage.getItem('userId')
    //首页
    foot1.addEventListener('click',function(){
        news.style.display='none'
        center.style.display='none'
        second.style.display='block'
        foot1.className='foot_click'
        foot2.className=''
        foot3.className=''
    })
    //我的消息
    var news_main=document.querySelector('#news_main')
    foot2.addEventListener('click',function(){
        news.style.display='block'
        second.style.display='none'
        center.style.display='none'
        news_main.innerHTML=""
        foot2.className='foot_click'
        foot1.className=''
        foot3.className=''
        var userId_obj={
            userId:userId
        }
        var userId_url='http://175.178.193.182:8080/chat/getList'
        axios.get(userId_url,{params:userId_obj}).then(function(res){
            console.log(res);
            for(let i=0;i<res.data.chatList.length;i++){
                var chat_people_main='<div id="chat_people_main"><img src="'+res.data.chatList[i].avatar+'" alt="" id="chat_people_img"><div id="chat_people_main_div"><p id="chat_people_main_nickname">'+res.data.chatList[i].nickname+'</p><p id="chat_people_main_word">'+res.data.chatList[i].description+'</p></div></div>'
                var chat_people_main1=document.createElement('div')
                chat_people_main1.innerHTML=chat_people_main
                news_main.appendChild(chat_people_main1)
            }
        })
    })
    //个人中心
    foot3.addEventListener('click',function(){
        news.style.display='none'
        center.style.display='block'
        second.style.display='none';
        foot3.className='foot_click'
        foot1.className=''
        foot2.className=''
        var arr=new Array
        var b=new Array
        var main_url='http://175.178.193.182:8080/article/byAuthor'
        var paramsObj={authorId:userId}
        axios.get(main_url,{params:paramsObj}).then(function(res){
            console.log(res);
            for(let i=0;i<res.data.articles.length;i++){
                var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="./picture/cartoon1.png" alt="" id="recommend_page_head"><span>'+userId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span><button id="buzhdiao">删除</button></div>'
                var recommend_page_left_11=document.createElement('div')
                recommend_page_left_11.innerHTML = recommend_page_left_0;
                if(note_part_right.clientHeight<note_part_left.clientHeight){
                    note_part_right.appendChild(recommend_page_left_11)
                }else
                if(note_part_right.clientHeight>=note_part_left.clientHeight){
                    note_part_left.appendChild(recommend_page_left_11)
                }
                recommend_page_left_11.setAttribute('articleId',res.data.articles[i].articleId)
                recommend_page_left_11.setAttribute('authorId',res.data.articles[i].authorId)
                var like=recommend_page_left_11.childNodes[0].childNodes[4]
                console.log(like);
                let j=0
                for(j=0;j<res.data.articles[i].likerList.length;j++){
                    if(res.data.articles[i].likerList[j]===userId){
                        like.className='likeone'
                        break
                    }else{
                        like.className='notlike'
                    }
                }
                if(res.data.articles[i].likerList.length===0){
                    like.className='notlike'
                }
                var head=recommend_page_left_11.childNodes[0].childNodes[2]
                arr[i]=head
                var Id={
                    userId:userId
                }
                b[i]=recommend_page_left_11.childNodes[0].childNodes[3]
                var url='http://175.178.193.182:8080/user/baseInfo'
                axios.get(url,{params:Id}).then(function(res){
                    console.log(res);
                    arr[i].src=res.data.user.avatar
                    b[i].innerHTML=res.data.user.nickname
                    console.log(arr[i]);
                })
            }
        })
    })
    var note_part_left=document.querySelector('#note_part_left')
    var note_part_right=document.querySelector('#note_part_right')
    note_part_left.addEventListener('click',function(e){
    let t=e.target
    console.log(t);
    var articleId=t.parentNode.parentNode.getAttribute('articleId')
    var buzhdiao=document.querySelector('#buzhdiao')
    if(t.id=='buzhdiao'){
        var articleId=t.parentNode.parentNode.getAttribute('articleid')
        console.log(t.parentNode.parentNode);
        console.log(articleId);
        var btn_obj={
            articleId:articleId
        }
        var url='http://175.178.193.182:8080/article/delete'
        axios.post(url,btn_obj).then(function(res){
            console.log(res);
            t.parentNode.remove()
        })
    }
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
    note_part_right.addEventListener('click',function(e){
    let t=e.target
    console.log(t);
    var articleId=t.parentNode.parentNode.getAttribute('articleId')
    if(t.id=='buzhdiao'){
        var articleId=t.parentNode.parentNode.getAttribute('articleid')
        console.log(t.parentNode.parentNode);
        console.log(articleId);
        var btn_obj={
            articleId:articleId
        }
        var url='http://175.178.193.182:8080/article/delete'
        axios.post(url,btn_obj).then(function(res){
            console.log(res);
            t.parentNode.remove()
        })
    }
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
    var log_out=document.querySelector('#log_out')
    log_out.addEventListener('click',function(){
        var url='http://175.178.193.182:8080/logout'
        var userId=localStorage.getItem('userId')
        console.log(userId);
        dataObj={userId: userId}
        axios.post(url,dataObj).then(function(res){
            console.log(res);
            firstpart.style.display='block'
            foot.style.display='none'
            center.style.display='none'
            username.value=''
            password.value=''
            localStorage.clear();
        })
    })
    //上传头像
    var portrait_img=document.querySelector('#portrait_img')
    var data_bgc_input=document.querySelector('#data_bgc_input')
    if(portrait_img.src!=''){
        portrait_input.addEventListener('change', function(e) {
            //1.可以通过this拿到这个file的DOM元素
            console.log(this)
            //1.  e 函数事件参数对象中也有这个file的DOM元素对象。使用e.target也可以直接拿到
            console.log(e.target)
            //对开发人员屏蔽，所以直接 必须调用这个文件的DOM对象的files属性，返回一个数组
            let files = e.target.files
            console.log(files)
            // console.log(files.item(0))
            console.log(files[0])
            // 判断一手是否有文件
            if (!files.length) return
            // 上传文件 创建FormData
            let formData = new FormData()
            var userId=localStorage.getItem('userId')
            formData.append('userId', userId)
            formData.append('avatar', files[0])
            formData.append('backGroundPicture', files[0])
            var url='http://175.178.193.182:8080/user/upload'
            axios.post(url,formData).then(function(res){
                console.log(res);
                header_img.src=portrait_img.src
            })
        })
    }
    var data=document.querySelector('#data')
    var data_page=document.querySelector('#data_page')
    data.addEventListener('click',function(){
        data_page.style.display='block'
        foot.style.display='none'
        center.style.display='none'
    })
    var data_back=document.querySelector('#data_back')
    data_back.addEventListener('click',function(){
        data_page.style.display='none'
        foot.style.display='block'
        center.style.display='block'
    })
    //修改资料
    data_back.addEventListener('click',function(){
        var userId=localStorage.getItem('userId')
        console.log(data_nickname_input.value);
        url='http://175.178.193.182:8080/user/edit'
        var dataObj={
            userId:userId,
            nickname:data_nickname_input.value,
            gender:data_gender_input.value,
            birthday:data_birthday_input.value,
            area:data_area_input.value,
            profession:'',
            description:data_description_input.value
        }
        axios.post(url,dataObj).then(function(res){
            console.log(res);
            foot.style.display='block'
            center.style.display='block'
            data_page.style.display='none'
            if(res.data.status==200){
                header_span.innerHTML=data_nickname_input.value
                //alert('修改资料成功')
            }
        })
    })
    var data_menu1_p=document.querySelector('#data_menu1_p')
    var data_menu2_p=document.querySelector('#data_menu2_p')
    var data_menu3_p=document.querySelector('#data_menu3_p')
    var note_part=document.querySelector('#note_part')
    var collection_part=document.querySelector('#collection_part')
    var liked_part=document.querySelector('#liked_part')
    var collection_part_left=document.querySelector('#collection_part_left')
    var collection_part_right=document.querySelector('#collection_part_right')
    var liked_part_left=document.querySelector('#liked_part_left')
    var liked_part_right=document.querySelector('#liked_part_right')
    data_menu1_p.addEventListener('click',function(){
        data_menu2_p.className=''
        data_menu3_p.className=''
        data_menu1_p.className='data_menu_p_click'
        note_part.style.display='block'
        collection_part.style.display='none'
        liked_part.style.display='none'
    })
    data_menu2_p.addEventListener('click',function(){
        data_menu1_p.className=''
        data_menu3_p.className=''
        data_menu2_p.className='data_menu_p_click'
        note_part.style.display='none'
        collection_part.style.display='block'
        liked_part.style.display='none'
        var star_url='http://175.178.193.182:8080/article/getStar'
        var star_params={userId:userId}
        axios.get(star_url,{params:star_params}).then(function(res){
            console.log(res);
            var i=0;
            for(i=0;i<res.data.staredArticles.length;i++){
                var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                var liked_part_11=document.createElement('div')
                liked_part_11.innerHTML = liked_part_1;
                if(collection_part_left.clientHeight<=collection_part_right.clientHeight){
                    collection_part_left.appendChild(liked_part_11)
                }else
                if(collection_part_left.clientHeight>collection_part_right.clientHeight){
                    collection_part_right.appendChild(liked_part_11)
                }
            }   
        })
    })
    data_menu3_p.addEventListener('click',function(){
        data_menu2_p.className=''
        data_menu1_p.className=''
        data_menu3_p.className='data_menu_p_click'
        note_part.style.display='none'
        collection_part.style.display='none'
        liked_part.style.display='block'
        var like_url='http://175.178.193.182:8080/article/getLike'
        var like_params={userId:userId}
        axios.get(like_url,{params:like_params}).then(function(res){
            console.log(res);
            var i=0;
            for(i=0;i<res.data.likedArticles.length;i++){
                var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                var liked_part_11=document.createElement('div')
                liked_part_11.innerHTML = liked_part_1;
                if(liked_part_left.clientHeight<=liked_part_right.clientHeight){
                    liked_part_left.appendChild(liked_part_11)
                }else
                if(liked_part_left.clientHeight>liked_part_right.clientHeight){
                    liked_part_right.appendChild(liked_part_11)
                }
            }   
        })
    })
    var center_follow=document.querySelector('#center_follow')
    var follow_page=document.querySelector('#follow_page')
    var follow_page_main=document.querySelector('#follow_page_main')
    center_follow.addEventListener('click',function(e){
        follow_page.style.display='block'
        foot.style.display='none'
        center.style.display='none'
        follow_page_main.innerHTML=""
        var userId=localStorage.getItem('userId')
        var follow_url='http://175.178.193.182:8080/user/followerList'
        var follow_params={userId:userId}
        axios.get(follow_url,{params:follow_params}).then(function(res){
            console.log(res);
            console.log(res.data.followsList.length);
            follow_number.innerHTML=res.data.followsList.length
            var i=0
            for(i=0;i<res.data.followsList.length;i++){
                var follow_page_content='<div id="follower"><img src="'+res.data.followsList[i].avatar+'" alt="" id="follower_head"><span id="follower_name">'+res.data.followsList[i].nickname+'</span><button id="follower_btn">已关注</button></div>'
                var follow_page_div=document.createElement('div')
                follow_page_div.innerHTML = follow_page_content;
                follow_page_main.appendChild(follow_page_div)
                follow_page_div.setAttribute('followerId',res.data.followsList[i].userId)
            }
        })
    })
    follow_page.addEventListener('click',function(e){
        let t=e.target
        console.log(t);
        if(t.id==='follower_btn'&&t.innerHTML==='未关注'){
            var follow_url='http://175.178.193.182:8080/user/follow'
            var followerId=t.parentNode.parentNode.getAttribute('followerId')
            let formData = new FormData()
            formData.append('followerId',followerId)
            formData.append('userId',userId)
            axios.post(follow_url,formData).then(function(res){
                console.log(res);
            })
            t.innerHTML='已关注'
        }else
        if(t.id==='follower_btn'&&t.innerHTML==='已关注'){
            var cancel_follower_url='http://175.178.193.182:8080/user/cancelFollow'
            var followerId=t.parentNode.parentNode.getAttribute('followerId')
            let formData = new FormData()
            formData.append('followerId',followerId)
            formData.append('userId',userId)
            axios.post(cancel_follower_url,formData).then(function(res){
                console.log(res);
            })
            t.innerHTML='未关注'
        }
    })
    var fans_page=document.querySelector('#fans_page')
    var follow_back=document.querySelector('#follow_back')
    follow_back.addEventListener('click',function(){
        follow_page.style.display='none'
        foot.style.display='block'
        center.style.display='block'
    })
    var fans_page_main=document.querySelector('#fans_page_main')
    var center_fans=document.querySelector('#center_fans')
    center_fans.addEventListener('click',function(){
        fans_page.style.display='block'
        foot.style.display='none'
        center.style.display='none'
        fans_page_main.innerHTML=""
        var arr=new Array
        var btn_arr=new Array
        var dataObj={userId:userId}
        var fans_url='http://175.178.193.182:8080/user/fanList'
        axios.get(fans_url,{params:dataObj}).then(function(res){
            console.log(res);
            for(let i=0;i<res.data.fansList.length;i++){
                var fans_page_content='<div id="fans"><img src="'+res.data.fansList[i].avatar+'" alt="" id="fans_head"><span id="fans_name">'+res.data.fansList[i].nickname+'</span><button id="fans_btn">已关注</button></div>'
                var fans_page_div=document.createElement('div')
                fans_page_div.innerHTML = fans_page_content;
                fans_page_main.appendChild(fans_page_div)
                fans_page_div.setAttribute('fansId',res.data.fansList[i].userId)
                console.log(fans_page_div.childNodes[0].childNodes[2]);
                var userId_obj={
                    userId:userId
                }
                arr[i]=res.data.fansList[i].userId
                btn_arr[i]=fans_page_div
                console.log(arr[i]);
                console.log(btn_arr[i]);
                var follower_url='http://175.178.193.182:8080/user/followerList'
                axios.get(follower_url,{params:userId_obj}).then(function(a){
                    console.log(a);
                    console.log(arr[i]);
                    for(let m=0;m<a.data.followsList.length;m++){
                        if(a.data.followsList[m].userId===arr[i]){
                            console.log('right');
                            console.log(btn_arr[i]);
                            btn_arr[i].childNodes[0].childNodes[2].innerHTML='互相关注'
                            break
                        }else
                        if(a.data.followsList[m].userId!=arr[i]){
                            console.log('no');
                            btn_arr[i].childNodes[0].childNodes[2].innerHTML='未关注'
                        }
                    }
                })
            }
        })
        //var fans_btn_content=fans_page_div.childNodes[0].childNodes[2]
        //var userId=localStorage.getItem('userId')
        //var follow_url='http://175.178.193.182:8080/user/followerList'
        //var follow_params={userId:userId}
        //axios.get(follow_url,{params:follow_params}).then(function(res){
        //    console.log(res);
        //})
    })
    //粉丝页面关注按钮
    fans_page_main.addEventListener('click',function(e){
        var t=e.target
        console.log(t);
        if(t.id=='fans_btn'){
            console.log(t.innerHTML);
            if(t.innerHTML==='未关注'){
                t.innerHTML='互相关注'
                //关注他
                data_obj={
                    userId:userId,
                    followerId:t.parentNode.parentNode.getAttribute('fansid')
                }
                data_url='http://175.178.193.182:8080/user/follow'
                axios.post(data_url,data_obj).then(function(res){
                    console.log(res);
                })
            }else
            if(t.innerHTML==='互相关注'){
                t.innerHTML='未关注'
                //取消关注
                data_obj={
                    userId:userId,
                    followerId:t.parentNode.parentNode.getAttribute('fansid')
                }
                data_url='http://175.178.193.182:8080/user/cancelFollow'
                axios.post(data_url,data_obj).then(function(res){
                    console.log(res);
                })
            }
        }
    })
    var fans_back=document.querySelector('#fans_back')
    fans_back.addEventListener('click',function(){
        fans_page.style.display='none'
        foot.style.display='block'
        center.style.display='block'
    })
    var picture=document.getElementById('picture')
    var btn_pre= document.getElementById("btn_pre");
    var btn_pre_div = document.getElementById("btn_pre_div");
    var index=1
    var url_array=new Array()
    btn_pre.onchange = function (e) {
        let files=e.target.files
        console.log(files[0]);
        let formData = new FormData()
        formData.append('image',files[0])
        var url='http://175.178.193.182:8080/upload/image'
        axios.post(url,formData).then(function(res){
            console.log(res);
            console.log(res.data.url);
            url_array.push(res.data.url)
            //console.log(url_array);
            /* localStorage.setItem('url_data',res.data.url) */
        })
        console.log(url_array);
        /* var url_data=localStorage.getItem('url_data')
        console.log(url_data);
        url_array.push(url_data)
        console.log(url_array);
        console.log(url_array.length); */
        //url_array[i]=url_data
        //i++
        //console.log(url_array[i]);
        var img = document.createElement("img")
        img.setAttribute('index',index)
        console.log(index);
        if(index%3==0){
            console.log('good');
            btn_pre.style.left=0+'px'
            btn_pre.style.top=index*42+'px'-130+'px'
            btn_pre_div.style.left=0+'px'
            btn_pre_div.style.top=40+index*42+'px'
            let new_height=125*(index/3+1)+'px'
            picture.style.height=new_height
        }else{
            console.log('sad');
            btn_pre.style.left=index%3*130+'px'-130+'px'
            btn_pre_div.style.left=index%3*130+'px'
            console.log(btn_pre.style.left);
        }
        index++
        img.src = window.URL.createObjectURL(btn_pre.files[0])
        img.onload = function () {
            window.URL.revokeObjectURL(this.src)
        }
        picture.appendChild(img)
    }
    //发文章功能
    var head_span3=document.querySelector('#head_span3');
    var third=document.querySelector('#third');
    var second=document.querySelector('#second')
    head_span3.addEventListener("click",function(){
        second.style.display='none';
        third.style.display='block';
        foot.style.display='none'
    })
    var article_btn=document.querySelector('#article_btn');
    var title_input=document.querySelector('#title_input');
    var content_input=document.querySelector('#content_input')
    var tag_input=document.querySelector('#tag_input')
    article_btn.addEventListener('click',function(){
        var tag_input_input=new Array()
        tag_input_input[0]=tag_input.value
        console.log(title_input.value);
        console.log(content_input.value);
        var userId=localStorage.getItem('userId')
        console.log(userId);
        var url='http://175.178.193.182:8080/article'
        var dataObj={
            userId: userId,
            title: title_input.value,
            content: content_input.value,
            images:url_array,
            tags:tag_input_input
        }
        axios.post(url,dataObj).then(function(res) {
            console.log(res);
            title_input.value=''
            content_input.value=''
        })
    })
    var recommend=document.querySelector('#recommend')
    var travel=document.querySelector('#travel')
    var food=document.querySelector('#food')
    var fashion=document.querySelector('#fashion')
    var beauty=document.querySelector('#beauty')
    var efficience=document.querySelector('#efficience')
    var skin=document.querySelector('#skin')
    var recommend_page=document.querySelector('#recommend_page')
    var travel_page=document.querySelector('#travel_page')
    var food_page=document.querySelector('#food_page')
    var fashion_page=document.querySelector('#fashion_page')
    var beauty_page=document.querySelector('#beauty_page')
    var efficience_page=document.querySelector('#efficience_page')
    var skin_page=document.querySelector('#skin_page')
    var menu_div=document.querySelector('.menu_div')
    var menu_div_p1=document.querySelector('#menu_div_p1')
    var menu_div_p2=document.querySelector('#menu_div_p2')
    var menu_div_p3=document.querySelector('#menu_div_p3')
    var menu_div_p4=document.querySelector('#menu_div_p4')
    var menu_div_p5=document.querySelector('#menu_div_p5')
    var menu_div_p6=document.querySelector('#menu_div_p6')
    var menu_div_p7=document.querySelector('#menu_div_p7')
    var recommend_flag=0
    recommend.addEventListener('click',function(){
        recommend_page.style.display='block'
        travel_page.style.display='none'
        food_page.style.display='none'
        fashion_page.style.display='none'
        beauty_page.style.display='none'
        efficience_page.style.display='none'
        skin_page.style.display='none'
        menu_div_p2.className=''
        menu_div_p3.className=''
        menu_div_p4.className=''
        menu_div_p5.className=''
        menu_div_p6.className=''
        menu_div_p7.className=''
        menu_div_p1.className='data_menu_p_click' 
    })
    var recommend_page_left=document.querySelector('#recommend_page_left')
    var recommend_page_right=document.querySelector('#recommend_page_right')
    recommend_page_left.addEventListener('click',function(e){
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
    recommend_page_right.addEventListener('click',function(e){
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
    var travel_flag=0
    travel.addEventListener('click',function(){
        travel_page.style.display='block'
        recommend_page.style.display='none'
        food_page.style.display='none'
        fashion_page.style.display='none'
        beauty_page.style.display='none'
        efficience_page.style.display='none'
        skin_page.style.display='none'
        menu_div_p2.className='data_menu_p_click'
        menu_div_p3.className=''
        menu_div_p4.className=''
        menu_div_p5.className=''
        menu_div_p6.className=''
        menu_div_p7.className=''
        menu_div_p1.className=''
        var b=new Array
        if(travel_flag==0){
            var main_url='http://175.178.193.182:8080/article/getHomePage'
            axios.get(main_url).then(function(res){
                var travel_page_left=document.querySelector('#travel_page_left')
                var travel_page_right=document.querySelector('#travel_page_right')
                for(let i=0;i<res.data.pages.旅行.length;i++){
                    console.log(res.data.pages.旅行[i]);
                    var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.pages.旅行[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.pages.旅行[i].title+'</p><img src="'+res.data.pages.旅行[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.pages.旅行[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.pages.旅行[i].likes+'</span></div>'
                    var recommend_page_left=document.querySelector('#recommend_page_left')
                    var recommend_page_left_11=document.createElement('div')
                    recommend_page_left_11.innerHTML = recommend_page_left_0;
                    if(travel_page_right.clientHeight<travel_page_left.clientHeight){
                        travel_page_right.appendChild(recommend_page_left_11)
                    }else
                    if(travel_page_right.clientHeight>=travel_page_left.clientHeight){
                        travel_page_left.appendChild(recommend_page_left_11)
                    }
                    var thisId=res.data.pages.旅行[i].authorId
                    var Id={
                        userId:thisId
                    }
                    b[i]=recommend_page_left_11.childNodes[0].childNodes[3]
                    console.log(recommend_page_left_11.childNodes[0].childNodes[3]);
                    var url='http://175.178.193.182:8080/user/baseInfo'
                    axios.get(url,{params:Id}).then(function(res){
                        b[i].innerHTML=res.data.user.nickname
                    })
                    recommend_page_left_11.setAttribute('articleId',res.data.pages.旅行[i].articleId)
                    recommend_page_left_11.setAttribute('authorId',res.data.pages.旅行[i].authorId)
                    var like=recommend_page_left_11.childNodes[0].childNodes[4]
                        var j=0
                        for(j=0;j<res.data.pages.旅行[i].likerList.length;j++){
                            if(res.data.pages.旅行[i].likerList[j]===userId){
                                like.className='likeone'
                                break
                            }else{
                                like.className='notlike'
                            }
                        }
                        if(res.data.pages.旅行[i].likerList.length===0){
                            like.className='notlike'
                        }
                    }

            })
            travel_flag=1
        }
    })
    var travel_page_left=document.querySelector('#travel_page_left')
    var travel_page_right=document.querySelector('#travel_page_right')
    travel_page_left.addEventListener('click',function(e){
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
    travel_page_right.addEventListener('click',function(e){
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
    var food_flag=0
    food.addEventListener('click',function(){
        food_page.style.display='block'
        recommend_page.style.display='none'
        travel_page.style.display='none'
        fashion_page.style.display='none'
        beauty_page.style.display='none'
        efficience_page.style.display='none'
        skin_page.style.display='none'
        menu_div_p2.className=''
        menu_div_p3.className='data_menu_p_click'
        menu_div_p4.className=''
        menu_div_p5.className=''
        menu_div_p6.className=''
        menu_div_p7.className=''
        menu_div_p1.className=''
        var b=new Array
        if(food_flag==0)
        var main_url='http://175.178.193.182:8080/article/getHomePage'
        axios.get(main_url).then(function(res){
            var food_page_left=document.querySelector('#food_page_left')
            var food_page_right=document.querySelector('#food_page_right')
            for(let i=0;i<res.data.pages.美食.length;i++){
                console.log(res.data.pages.美食[i]);
                var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.pages.美食[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.pages.美食[i].title+'</p><img src="'+res.data.pages.美食[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.pages.美食[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.pages.美食[i].likes+'</span></div>'
                var recommend_page_left=document.querySelector('#recommend_page_left')
                var recommend_page_left_11=document.createElement('div')
                recommend_page_left_11.innerHTML = recommend_page_left_0;
                if(food_page_right.clientHeight<food_page_left.clientHeight){
                    food_page_right.appendChild(recommend_page_left_11)
                }else
                if(food_page_right.clientHeight>=food_page_left.clientHeight){
                    food_page_left.appendChild(recommend_page_left_11)
                }
                var thisId=res.data.pages.美食[i].authorId
                var Id={
                    userId:thisId
                }
                b[i]=recommend_page_left_11.childNodes[0].childNodes[3]
                console.log(recommend_page_left_11.childNodes[0].childNodes[3]);
                var url='http://175.178.193.182:8080/user/baseInfo'
                axios.get(url,{params:Id}).then(function(res){
                    b[i].innerHTML=res.data.user.nickname
                })
                recommend_page_left_11.setAttribute('articleId',res.data.pages.美食[i].articleId)
                recommend_page_left_11.setAttribute('authorId',res.data.pages.美食[i].authorId)
                var like=recommend_page_left_11.childNodes[0].childNodes[4]
                    var j=0
                    for(j=0;j<res.data.pages.美食[i].likerList.length;j++){
                        if(res.data.pages.美食[i].likerList[j]===userId){
                            like.className='likeone'
                            break
                        }else{
                            like.className='notlike'
                        }
                    }
                    if(res.data.pages.美食[i].likerList.length===0){
                        like.className='notlike'
                    }
            }
        })
        food_flag=1
    })
    var food_page_left=document.querySelector('#food_page_left')
    var food_page_right=document.querySelector('#food_page_right')
    food_page_left.addEventListener('click',function(e){
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
    food_page_right.addEventListener('click',function(e){
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
    var fashion_flag=0
    fashion.addEventListener('click',function(){
        fashion_page.style.display='block'
        recommend_page.style.display='none'
        travel_page.style.display='none'
        food_page.style.display='none'
        beauty_page.style.display='none'
        efficience_page.style.display='none'
        skin_page.style.display='none'
        menu_div_p2.className=''
        menu_div_p3.className=''
        menu_div_p4.className='data_menu_p_click'
        menu_div_p5.className=''
        menu_div_p6.className=''
        menu_div_p7.className=''
        menu_div_p1.className=''
        var b=new Array
        if(fashion_flag==0){
            var main_url='http://175.178.193.182:8080/article/getHomePage'
            axios.get(main_url).then(function(res){
                var fashion_page_left=document.querySelector('#fashion_page_left')
                var fashion_page_right=document.querySelector('#fashion_page_right')
                for(let i=0;i<res.data.pages.时尚.length;i++){
                    console.log(res.data.pages.时尚[i]);
                    var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.pages.时尚[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.pages.时尚[i].title+'</p><img src="'+res.data.pages.时尚[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.pages.时尚[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.pages.时尚[i].likes+'</span></div>'
                    var recommend_page_left=document.querySelector('#recommend_page_left')
                    var recommend_page_left_11=document.createElement('div')
                    recommend_page_left_11.innerHTML = recommend_page_left_0;
                    if(fashion_page_right.clientHeight<fashion_page_left.clientHeight){
                        fashion_page_right.appendChild(recommend_page_left_11)
                    }else
                    if(fashion_page_right.clientHeight>=fashion_page_left.clientHeight){
                        fashion_page_left.appendChild(recommend_page_left_11)
                    }
                    var thisId=res.data.pages.时尚[i].authorId
                    var Id={
                        userId:thisId
                    }
                    b[i]=recommend_page_left_11.childNodes[0].childNodes[3]
                    console.log(recommend_page_left_11.childNodes[0].childNodes[3]);
                    var url='http://175.178.193.182:8080/user/baseInfo'
                    axios.get(url,{params:Id}).then(function(res){
                        b[i].innerHTML=res.data.user.nickname
                    })
                    recommend_page_left_11.setAttribute('articleId',res.data.pages.时尚[i].articleId)
                    recommend_page_left_11.setAttribute('authorId',res.data.pages.时尚[i].authorId)
                    var like=recommend_page_left_11.childNodes[0].childNodes[4]
                    var j=0
                    for(j=0;j<res.data.pages.时尚[i].likerList.length;j++){
                        if(res.data.pages.时尚[i].likerList[j]===userId){
                            like.className='likeone'
                            break
                        }else{
                            like.className='notlike'
                        }
                    }
                    if(res.data.pages.时尚[i].likerList.length===0){
                        like.className='notlike'
                    }
                }
            })
            fashion_flag=1
        }
    })
    var fashion_page_left=document.querySelector('#fashion_page_left')
    var fashion_page_right=document.querySelector('#fashion_page_right')
    fashion_page_left.addEventListener('click',function(e){
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
    fashion_page_right.addEventListener('click',function(e){
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
    var beauty_flag=0
    beauty.addEventListener('click',function(){
        beauty_page.style.display='block'
        recommend_page.style.display='none'
        travel_page.style.display='none'
        food_page.style.display='none'
        fashion_page.style.display='none'
        efficience_page.style.display='none'
        skin_page.style.display='none'
        menu_div_p2.className=''
        menu_div_p3.className=''
        menu_div_p4.className=''
        menu_div_p5.className='data_menu_p_click'
        menu_div_p6.className=''
        menu_div_p7.className=''
        menu_div_p1.className=''
        var b=new Array
        if(beauty_flag==0){
            var main_url='http://175.178.193.182:8080/article/getHomePage'
            axios.get(main_url).then(function(res){
                var beauty_page_left=document.querySelector('#beauty_page_left')
                var beauty_page_right=document.querySelector('#beauty_page_right')
                for(let i=0;i<res.data.pages.彩妆.length;i++){
                    console.log(res.data.pages.彩妆[i]);
                    var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.pages.彩妆[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.pages.彩妆[i].title+'</p><img src="'+res.data.pages.彩妆[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.pages.彩妆[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.pages.彩妆[i].likes+'</span></div>'
                    var recommend_page_left=document.querySelector('#recommend_page_left')
                    var recommend_page_left_11=document.createElement('div')
                    recommend_page_left_11.innerHTML = recommend_page_left_0;
                    if(beauty_page_right.clientHeight<beauty_page_left.clientHeight){
                        beauty_page_right.appendChild(recommend_page_left_11)
                        console.log(recommend_page_left_11.clientHeight);
                    }else
                    {
                        beauty_page_left.appendChild(recommend_page_left_11)
                        console.log(recommend_page_left_11.clientHeight);
                    }
                    var thisId=res.data.pages.彩妆[i].authorId
                    var Id={
                        userId:thisId
                    }
                    b[i]=recommend_page_left_11.childNodes[0].childNodes[3]
                    console.log(recommend_page_left_11.childNodes[0].childNodes[3]);
                    var url='http://175.178.193.182:8080/user/baseInfo'
                    axios.get(url,{params:Id}).then(function(res){
                        b[i].innerHTML=res.data.user.nickname
                    })
                    recommend_page_left_11.setAttribute('articleId',res.data.pages.彩妆[i].articleId)
                    recommend_page_left_11.setAttribute('authorId',res.data.pages.彩妆[i].authorId)
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
    var efficience_flag=0
    efficience.addEventListener('click',function(){
        efficience_page.style.display='block'
        recommend_page.style.display='none'
        travel_page.style.display='none'
        food_page.style.display='none'
        fashion_page.style.display='none'
        beauty_page.style.display='none'
        skin_page.style.display='none'
        menu_div_p2.className=''
        menu_div_p3.className=''
        menu_div_p4.className=''
        menu_div_p5.className=''
        menu_div_p6.className='data_menu_p_click'
        menu_div_p7.className=''
        menu_div_p1.className=''
        var b=new Array
        if(efficience_flag==0){
            var main_url='http://175.178.193.182:8080/article/getHomePage'
            axios.get(main_url).then(function(res){
                var efficience_page_left=document.querySelector('#efficience_page_left')
                var efficience_page_right=document.querySelector('#efficience_page_right')
                for(let i=0;i<res.data.pages.高效.length;i++){
                    console.log(res.data.pages.高效[i]);
                    var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.pages.高效[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.pages.高效[i].title+'</p><img src="'+res.data.pages.高效[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.pages.高效[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.pages.高效[i].likes+'</span></div>'
                    var recommend_page_left=document.querySelector('#recommend_page_left')
                    var recommend_page_left_11=document.createElement('div')
                    recommend_page_left_11.innerHTML = recommend_page_left_0;
                    if(efficience_page_right.clientHeight<efficience_page_left.clientHeight){
                        efficience_page_right.appendChild(recommend_page_left_11)
                    }else
                    if(efficience_page_right.clientHeight>=efficience_page_left.clientHeight){
                        efficience_page_left.appendChild(recommend_page_left_11)
                    }
                    var thisId=res.data.pages.高效[i].authorId
                    var Id={
                        userId:thisId
                    }
                    b[i]=recommend_page_left_11.childNodes[0].childNodes[3]
                    console.log(recommend_page_left_11.childNodes[0].childNodes[3]);
                    var url='http://175.178.193.182:8080/user/baseInfo'
                    axios.get(url,{params:Id}).then(function(res){
                        b[i].innerHTML=res.data.user.nickname
                    })
                    recommend_page_left_11.setAttribute('articleId',res.data.pages.高效[i].articleId)
                    recommend_page_left_11.setAttribute('authorId',res.data.pages.高效[i].authorId)
                    var like=recommend_page_left_11.childNodes[0].childNodes[4]
                    var j=0
                    for(j=0;j<res.data.pages.高效[i].likerList.length;j++){
                        if(res.data.pages.高效[i].likerList[j]===userId){
                            like.className='likeone'
                            break
                        }else{
                            like.className='notlike'
                        }
                    }
                    if(res.data.pages.高效[i].likerList.length===0){
                        like.className='notlike'
                    }
                }
            })
            efficience_flag=1
        }
    })
    var efficience_page_left=document.querySelector('#efficience_page_left')
    var efficience_page_right=document.querySelector('#efficience_page_right')
    efficience_page_left.addEventListener('click',function(e){
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
    efficience_page_right.addEventListener('click',function(e){
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
    var skin_flag=0
    skin.addEventListener('click',function(){
        skin_page.style.display='block'
        recommend_page.style.display='none'
        travel_page.style.display='none'
        food_page.style.display='none'
        fashion_page.style.display='none'
        beauty_page.style.display='none'
        efficience_page.style.display='none'
        menu_div_p2.className=''
        menu_div_p3.className=''
        menu_div_p4.className=''
        menu_div_p5.className=''
        menu_div_p6.className=''
        menu_div_p7.className='data_menu_p_click'
        menu_div_p1.className=''
        var b=new Array
        if(skin_flag==0){
            var main_url='http://175.178.193.182:8080/article/getHomePage'
            axios.get(main_url).then(function(res){
                console.log(res);
                var skin_page_left=document.querySelector('#skin_page_left')
                var skin_page_right=document.querySelector('#skin_page_right')
                for(let i=0;i<res.data.pages.护肤.length;i++){
                    console.log(res.data.pages.护肤[i]);
                    var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.pages.护肤[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.pages.护肤[i].title+'</p><img src="'+res.data.pages.护肤[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.pages.护肤[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.pages.护肤[i].likes+'</span></div>'
                    var recommend_page_left=document.querySelector('#recommend_page_left')
                    var recommend_page_left_11=document.createElement('div')
                    recommend_page_left_11.innerHTML = recommend_page_left_0;
                    if(skin_page_right.clientHeight<skin_page_left.clientHeight){
                        skin_page_right.appendChild(recommend_page_left_11)
                    }else
                    if(skin_page_right.clientHeight>=skin_page_left.clientHeight){
                        skin_page_left.appendChild(recommend_page_left_11)
                    }
                    var thisId=res.data.pages.护肤[i].authorId
                    var Id={
                        userId:thisId
                    }
                    b[i]=recommend_page_left_11.childNodes[0].childNodes[3]
                    console.log(recommend_page_left_11.childNodes[0].childNodes[3]);
                    var url='http://175.178.193.182:8080/user/baseInfo'
                    axios.get(url,{params:Id}).then(function(res){
                        b[i].innerHTML=res.data.user.nickname
                    })
                    recommend_page_left_11.setAttribute('articleId',res.data.pages.护肤[i].articleId)
                    recommend_page_left_11.setAttribute('authorId',res.data.pages.护肤[i].authorId)
                    var like=recommend_page_left_11.childNodes[0].childNodes[4]
                    var j=0
                    console.log(res.data.pages.护肤[i].likerList);
                    for(j=0;j<res.data.pages.护肤[i].likerList.length;j++){
                        if(res.data.pages.护肤[i].likerList[j]===userId){
                            like.className='likeone'
                            break
                        }else{
                            like.className='notlike'
                        }
                    }
                    if(res.data.pages.护肤[i].likerList.length===0){
                        like.className='notlike'
                    }
                }
            })
            skin_flag=1
        }
    })
    var skin_page_left=document.querySelector('#skin_page_left')
    var skin_page_right=document.querySelector('#skin_page_right')
    skin_page_left.addEventListener('click',function(e){
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
    skin_page_right.addEventListener('click',function(e){
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
    //回退到主页面
    var third_span1=document.querySelector('#third_span1');
    var picture=document.querySelector('#picture')
    var btn_pre_div=document.querySelector('#btn_pre_div')
    third_span1.addEventListener('click',function(){
        picture.innerHTML=""
        title_input.value=''
        content_input.value=''
        tag_input.value=''
        third.style.display='none';
        second.style.display='block';
        foot.style.display='block'
        picture.style.height="120px"
        btn_pre_div.style.top="40px"
        btn_pre_div.style.left="0px"
    })
    //点击首页文章图片或标题进入详情页面
    recommend_page.addEventListener('click',function(e){
        let t=e.target
        console.log(t);
        if(t.id==='recommend_page_left_p1'||t.id==='recommend_page_head_top'){
            recommend_page_main.style.display='block'
            second.style.display='none'
            foot.style.display='none'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            var articleid=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('articleid',articleid)
            localStorage.setItem('authorid',authorid)
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_head=document.querySelector('#recommend_page_main_head')
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_btn=document.querySelector('#recommend_page_main_btn')
            var recommend_page_main_picture_li=document.querySelector('#recommend_page_main_picture_li')
            var recommend_page_main_picture_li_img=document.querySelector('#recommend_page_main_picture_li_img')
            var recommend_page_main_picture_ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_title=document.querySelector('#recommend_page_main_title')
            var recommend_page_main_title_p=document.querySelector('#recommend_page_main_title_p')
            var recommend_page_main_content_p=document.querySelector('#recommend_page_main_content_p')
            var recommend_page_main_tag_span2=document.querySelector('#recommend_page_main_tag_span2')
            var recommend_page_main_bottom_span1=document.querySelector('#recommend_page_main_bottom_span1')
            var recommend_page_main_bottom_span2=document.querySelector('#recommend_page_main_bottom_span2')
            var ol=document.querySelector('#circle')
            var ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_picture=document.querySelector('#recommend_page_main_picture')
            //渲染详情页面            
            var recommend_page_main_url='http://175.178.193.182:8080/article/byId'
            var articleId=t.parentNode.parentNode.getAttribute('articleId')
            var paramsObj={articleId:articleId}
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0
                for(i=0;i<res.data.article.images.length;i++){
                    var recommend_page_main_picture_li='<img src="./picture/login_bg1.jpg" alt="" id="recommend_page_main_picture_li_img">'
                    var recommend_page_main_picture_li1=document.createElement('li')
                    recommend_page_main_picture_li1.innerHTML=recommend_page_main_picture_li
                    recommend_page_main_picture_ul.appendChild(recommend_page_main_picture_li1)
                    recommend_page_main_picture_li1.childNodes[0].src=res.data.article.images[i];
                    recommend_page_main_title_p.innerHTML=res.data.article.title
                    recommend_page_main_content_p.innerHTML=res.data.article.content
                    recommend_page_main_tag_span2.innerHTML=res.data.article.tags
                    recommend_page_main_bottom_span1.innerHTML=res.data.article.postDate
                    var li=document.createElement('li');
                    li.setAttribute('index',i);
                    ol.appendChild(li);
                    ol.children[0].className='current';
                }
            })
            //获取收藏人数
            var recommend_page_main_search_bottom_collection_number=document.querySelector('#recommend_page_main_search_bottom_collection_number')
            var recommend_page_main_search_bottom_collection_span=document.querySelector('#recommend_page_main_search_bottom_collection_span')
            var recommend_page_main_search_bottom_like_span=document.querySelector('#recommend_page_main_search_bottom_like_span')
            var recommend_page_main_search_bottom_like_number=document.querySelector('#recommend_page_main_search_bottom_like_number')
            var myID=localStorage.getItem('myID')
            console.log(myID);
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                recommend_page_main_search_bottom_collection_number.innerHTML=res.data.article.starerList.length
                var i=0
                for(i=0;i<res.data.article.starerList.length;i++){
                    if(res.data.article.starerList[i]===myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click1'
                    }else
                    if(res.data.article.starerList[i]!=myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click2'
                    }
                }
                //获取点赞人数
                recommend_page_main_search_bottom_like_number.innerHTML=res.data.article.likerList.length
                if(res.data.article.likerList.length==0){
                    recommend_page_main_search_bottom_like_span.className='notlike'
                }
                for(i=0;i<res.data.article.likerList.length;i++){
                    //console.log(res.data.article.likerList[i]);
                    if(res.data.article.likerList[i]===myID){
                        recommend_page_main_search_bottom_like_span.className='likeone'
                        break
                    }else
                    if(res.data.article.likerList[i]!=myID){
                        recommend_page_main_search_bottom_like_span.className='notlike'
                    }
                }
            })  
            //获取评论并渲染评论
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            var articleId=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('the_article_id',articleId)
            var recommend_page_main_discussion_number_num=document.querySelector('#recommend_page_main_discussion_number_num')
            var recommend_page_main_discussion_nickname=document.querySelector('#recommend_page_main_discussion_nickname')
            var recommend_page_main_discussion_content=document.querySelector('#recommend_page_main_discussion_content')
            var recommend_page_main_discussion_like_number=document.querySelector('#recommend_page_main_discussion_like_number')
            var discussion_url='http://175.178.193.182:8080/review/byArticle'
            var discussion_Obj={
                articleId:articleId,
                pages:0
            }
            axios.get(discussion_url,{params:discussion_Obj}).then(function(res){
                console.log(res);
                recommend_page_main_discussion_number_num.innerHTML=res.data.reviews.length
                //一级评论
                for(let i=0;i<res.data.reviews.length;i++){
                    if(parseInt(res.data.reviews[i].authorId)!=parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }else
                    if(parseInt(res.data.reviews[i].authorId)===parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p><button id="delete_discussion_btn">删除</button></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }
                    recommend_page_main_discussion_div11.setAttribute('reviewId',res.data.reviews[i].reviewId);
                    recommend_page_main_discussion_div11.setAttribute('articleId',res.data.reviews[i].replyToArticleId);
                    recommend_page_main_discussion_div11.setAttribute('authorId',res.data.reviews[i].authorId);
                    var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                    var review_authorId=res.data.reviews[i].authorId
                    var baseInfo_obj={
                        userId:review_authorId
                    }
                    axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                        console.log(res);
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[0].src=res.data.user.avatar
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                    })
                    var like=recommend_page_main_discussion_div11.childNodes[0].childNodes[2].childNodes[0]
                    var j=0
                    if(res.data.reviews[i].likerList.length===0){
                        like.className='notlike'
                    }
                    for(j=0;j<res.data.reviews[i].likerList.length;j++){
                        if(res.data.reviews[i].likerList[j]===myID){
                            like.className='likeone'
                            break
                        }else
                        if(res.data.reviews[i].likerList[j]!=myID){
                            like.className='notlike'
                        }
                    }
                    //渲染二级评论
                    if(res.data.reviews[i].reviewList.length!=0){
                        for(let j=0;j<res.data.reviews[i].reviewList.length;j++){
                            var second_review_authorId=res.data.reviews[i].reviewList[j].authorId
                            var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                            var review_authorId=res.data.reviews[i].authorId
                            var baseInfo_obj={
                                userId:second_review_authorId
                            }
                            axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                                console.log(res);
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[0].src=res.data.user.avatar
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                            })
                            if(parseInt(res.data.reviews[i].reviewList[j].authorId)===parseInt(myID)){
                                var second_discussion='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head1"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].reviewList[j].authorId+'</p><p id="recommend_page_main_discussion_content">'+res.data.reviews[i].reviewList[j].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like2"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].reviewList[j].likes+'</p><button id="delete_discussion_btn">删除</button></div></div>'
                                var second_discussion_div=document.createElement('div')
                                second_discussion_div.innerHTML=second_discussion
                                recommend_page_main_discussion_div11.appendChild(second_discussion_div)
                                console.log(second_discussion_div);
                            }else
                            if(parseInt(res.data.reviews[i].reviewList[j].authorId)!=parseInt(myID)){
                                var second_discussion='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head1"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].reviewList[j].authorId+'</p><p id="recommend_page_main_discussion_content">'+res.data.reviews[i].reviewList[j].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like2"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].reviewList[j].likes+'</p></div></div>'
                                var second_discussion_div=document.createElement('div')
                                second_discussion_div.innerHTML=second_discussion
                                recommend_page_main_discussion_div11.appendChild(second_discussion_div)
                            }
                            second_discussion_div.setAttribute('reviewId',res.data.reviews[i].reviewList[j].reviewId)
                            second_discussion_div.setAttribute('authorId',res.data.reviews[i].reviewList[j].authorId)
                            var second_like=second_discussion_div.childNodes[0].childNodes[2].childNodes[0]
                            if(res.data.reviews[i].reviewList[j].likerList.length===0){
                                second_like.className='notlike'
                            }
                            var k=0
                            console.log(second_like);
                            console.log(res.data.reviews[i].reviewList[j].likerList.length);
                            for(k=0;k<res.data.reviews[i].reviewList[j].likerList.length;k++){
                                if(res.data.reviews[i].reviewList[j].likerList[k]===myID){
                                    second_like.className='likeone'
                                    break
                                }else
                                if(res.data.reviews[i].reviewList[j].likerList[k]!=myID){
                                    second_like.className='notlike'
                                }
                            }
                        }
                    }
                }
            })
            //获取文章用户信息渲染头像和昵称
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            var userobj={userId:userId}
            var userId_url='http://175.178.193.182:8080/user/fullInfo'
            axios.get(userId_url,{params:userobj}).then(function(res){
                console.log(res);
                recommend_page_main_head.src=res.data.user.avatar
                recommend_page_main_nickname.innerHTML=res.data.user.nickname
            })
            //获取用户个人的关注列表确认是否有关注该用户
            var myID=localStorage.getItem('myID')
            var myID_data={userId:myID}
            var myID_url='http://175.178.193.182:8080/user/followerList'
            axios.get(myID_url,{params:myID_data}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.followsList.length;i++){
                    if(res.data.followsList[i].userId==userId){
                        recommend_page_main_btn.innerHTML='已关注'
                        break
                    }else
                    if(res.data.followsList[i].userId!=userId){
                        recommend_page_main_btn.innerHTML='未关注'
                    }
                }
            })
            //点击头像进入
            recommend_page_main_head.addEventListener('click',function(){
                second.style.display='none'
                foot.style.display='none'
                var data_menu11=document.querySelector('#data_menu11')
                //渲染页面            
                var other_center_url='http://175.178.193.182:8080/user/fullInfo'
                var authorid=t.parentNode.parentNode.getAttribute('authorid')
                localStorage.setItem('otherid',authorid)
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var paramsObj={userId:authorid}
                axios.get(other_center_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var header_img1=document.querySelector('#header_img1')
                    var header_span1=document.querySelector('#header_span1')
                    header_img1.src=res.data.user.avatar
                    header_span1.innerHTML=res.data.user.nickname
                    var center_follow1=document.querySelector('#center_follow1')
                    var follow_page1=document.querySelector('#follow_page1')
                    var follow_page_main1=document.querySelector('#follow_page_main1')
                    var follow_number1=document.querySelector('#follow_number1')
                    var fans_number1=document.querySelector('#fans_number1')
                    var follow_url='http://175.178.193.182:8080/user/followerList'
                    var follow_params={userId:authorid}
                    axios.get(follow_url,{params:follow_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.followsList.length);
                        follow_number1.innerHTML=res.data.followsList.length
                    })
                    var fans_url='http://175.178.193.182:8080/user/fanList'
                    var fans_params={userId:authorid}
                    axios.get(fans_url,{params:fans_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.fansList.length);
                        fans_number1.innerHTML=res.data.fansList.length
                    })
                    var collection_number1=document.querySelector('#collection_number1')
                    var like_url='http://175.178.193.182:8080/article/getLike'
                    var like_params={userId:authorid}
                    axios.get(like_url,{params:like_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.likedArticles.length);
                        localStorage.setItem('like_number1',res.data.likedArticles.length)
                    })
                    var like_number1=localStorage.getItem('like_number1')
                    console.log(like_number1);
                    var star_url='http://175.178.193.182:8080/article/getStar'
                    var star_params={userId:authorid}
                    axios.get(star_url,{params:star_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.staredArticles.length);
                        localStorage.setItem('star_number1',res.data.staredArticles.length)
                    })
                    var star_number1=localStorage.getItem('star_number1')
                    console.log(star_number1);
                    var collection1=parseInt(like_number1)+parseInt(star_number1)
                    console.log(collection1);
                    collection_number1.innerHTML=collection1
                })
                var data_menu1_p1=document.querySelector('#data_menu1_p1')
                var data_menu2_p1=document.querySelector('#data_menu2_p1')
                var data_menu3_p1=document.querySelector('#data_menu3_p1')
                var note_part1=document.querySelector('#note_part1')
                var collection_part1=document.querySelector('#collection_part1')
                var liked_part1=document.querySelector('#liked_part1')
                var note_part_left1=document.querySelector('#note_part_left1')
                var note_part_right1=document.querySelector('#note_part_right1')
                var collection_part_left1=document.querySelector('#collection_part_left1')
                var collection_part_right1=document.querySelector('#collection_part_right1')
                var liked_part_left1=document.querySelector('#liked_part_left1')
                var liked_part_right1=document.querySelector('#liked_part_right1')
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                note_part_left1.innerHTML=""
                note_part_right1.innerHTML=""
                var main_url='http://175.178.193.182:8080/article/byAuthor'
                var paramsObj={authorId:otherid}
                axios.get(main_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.articles.length;i++){
                        var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                        var recommend_page_left_11=document.createElement('div')
                        recommend_page_left_11.innerHTML = recommend_page_left_0;
                        if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                            note_part_right1.appendChild(recommend_page_left_11)
                        }else
                        if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                            note_part_left1.appendChild(recommend_page_left_11)
                        }
                    }
                })
                collection_part_left1.innerHTML=""
                collection_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:otherid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.staredArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                            collection_part_left1.appendChild(liked_part_11)
                        }else
                        if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                            collection_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })
                liked_part_left1.innerHTML=""
                liked_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:otherid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.likedArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                            liked_part_left1.appendChild(liked_part_11)
                        }else
                        if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                            liked_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })

            })
            //获取评论人数
            var myIDobj={userId:myID}
            var recommend_page_main_search_bottom_discuss_number=document.querySelector('#recommend_page_main_search_bottom_discuss_number')
            var discuss_url='http://175.178.193.182:8080/notice/comment'
            axios.get(discuss_url,{params:myIDobj}).then(function(res){
                console.log(res);
                recommend_page_main_search_bottom_discuss_number.innerHTML=res.data.like.length
            })
        } 
        //进入个人页面
        if(t.id==='recommend_page_head'){
            var other_center=document.querySelector('#other_center')
            other_center.style.display='block'
            second.style.display='none'
            foot.style.display='none'
            var data_menu11=document.querySelector('#data_menu11')
            //渲染页面            
            var other_center_url='http://175.178.193.182:8080/user/fullInfo'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            localStorage.setItem('otherid',authorid)
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var paramsObj={userId:authorid}
            axios.get(other_center_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var header_img1=document.querySelector('#header_img1')
                var header_span1=document.querySelector('#header_span1')
                header_img1.src=res.data.user.avatar
                header_span1.innerHTML=res.data.user.nickname
                var center_follow1=document.querySelector('#center_follow1')
                var follow_page1=document.querySelector('#follow_page1')
                var follow_page_main1=document.querySelector('#follow_page_main1')
                var follow_number1=document.querySelector('#follow_number1')
                var fans_number1=document.querySelector('#fans_number1')
                var follow_url='http://175.178.193.182:8080/user/followerList'
                var follow_params={userId:authorid}
                axios.get(follow_url,{params:follow_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.followsList.length);
                    follow_number1.innerHTML=res.data.followsList.length
                })
                var fans_url='http://175.178.193.182:8080/user/fanList'
                var fans_params={userId:authorid}
                axios.get(fans_url,{params:fans_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.fansList.length);
                    fans_number1.innerHTML=res.data.fansList.length
                })
                var collection_number1=document.querySelector('#collection_number1')
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:authorid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.likedArticles.length);
                    localStorage.setItem('like_number1',res.data.likedArticles.length)
                })
                var like_number1=localStorage.getItem('like_number1')
                console.log(like_number1);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:authorid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.staredArticles.length);
                    localStorage.setItem('star_number1',res.data.staredArticles.length)
                })
                var star_number1=localStorage.getItem('star_number1')
                console.log(star_number1);
                var collection1=parseInt(like_number1)+parseInt(star_number1)
                console.log(collection1);
                collection_number1.innerHTML=collection1
            })
            var data_menu1_p1=document.querySelector('#data_menu1_p1')
            var data_menu2_p1=document.querySelector('#data_menu2_p1')
            var data_menu3_p1=document.querySelector('#data_menu3_p1')
            var note_part1=document.querySelector('#note_part1')
            var collection_part1=document.querySelector('#collection_part1')
            var liked_part1=document.querySelector('#liked_part1')
            var note_part_left1=document.querySelector('#note_part_left1')
            var note_part_right1=document.querySelector('#note_part_right1')
            var collection_part_left1=document.querySelector('#collection_part_left1')
            var collection_part_right1=document.querySelector('#collection_part_right1')
            var liked_part_left1=document.querySelector('#liked_part_left1')
            var liked_part_right1=document.querySelector('#liked_part_right1')
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            note_part_left1.innerHTML=""
            note_part_right1.innerHTML=""
            var main_url='http://175.178.193.182:8080/article/byAuthor'
            var paramsObj={authorId:otherid}
            axios.get(main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.articles.length;i++){
                    var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                    var recommend_page_left_11=document.createElement('div')
                    recommend_page_left_11.innerHTML = recommend_page_left_0;
                    if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                        note_part_right1.appendChild(recommend_page_left_11)
                    }else
                    if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                        note_part_left1.appendChild(recommend_page_left_11)
                    }
                }
            })
            collection_part_left1.innerHTML=""
            collection_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var star_url='http://175.178.193.182:8080/article/getStar'
            var star_params={userId:otherid}
            axios.get(star_url,{params:star_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.staredArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                        collection_part_left1.appendChild(liked_part_11)
                    }else
                    if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                        collection_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
            liked_part_left1.innerHTML=""
            liked_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var like_url='http://175.178.193.182:8080/article/getLike'
            var like_params={userId:otherid}
            axios.get(like_url,{params:like_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.likedArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                        liked_part_left1.appendChild(liked_part_11)
                    }else
                    if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                        liked_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
        }
    })

    var data_menu1_p1=document.querySelector('#data_menu1_p1')
    var data_menu2_p1=document.querySelector('#data_menu2_p1')
    var data_menu3_p1=document.querySelector('#data_menu3_p1')
    var note_part1=document.querySelector('#note_part1')
    var collection_part1=document.querySelector('#collection_part1')
    var liked_part1=document.querySelector('#liked_part1')
    var collection_part_left1=document.querySelector('#collection_part_left1')
    var collection_part_right1=document.querySelector('#collection_part_right1')
    var liked_part_left1=document.querySelector('#liked_part_left1')
    var liked_part_right1=document.querySelector('#liked_part_right1')
    data_menu1_p1.addEventListener('click',function(){
        var otherid=localStorage.getItem('otherid')
        console.log(otherid);
        data_menu2_p1.className=''
        data_menu3_p1.className=''
        data_menu1_p1.className='data_menu_p_click'
        note_part1.style.display='block'
        collection_part1.style.display='none'
        liked_part1.style.display='none'
    })
    data_menu2_p1.addEventListener('click',function(){
        collection_part_left1.innerHTML=""
        collection_part_right1.innerHTML=""
        var otherid=localStorage.getItem('otherid')
        console.log(otherid);
        data_menu1_p1.className=''
        data_menu3_p1.className=''
        data_menu2_p1.className='data_menu_p_click'
        note_part1.style.display='none'
        collection_part1.style.display='block'
        liked_part1.style.display='none'
        var star_url='http://175.178.193.182:8080/article/getStar'
        var star_params={userId:otherid}
        axios.get(star_url,{params:star_params}).then(function(res){
            console.log(res);
            var i=0;
            for(i=0;i<res.data.staredArticles.length;i++){
                var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                var liked_part_11=document.createElement('div')
                liked_part_11.innerHTML = liked_part_1;
                if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                    collection_part_left1.appendChild(liked_part_11)
                }else
                if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                    collection_part_right1.appendChild(liked_part_11)
                }
            }   
        })
    })
    data_menu3_p1.addEventListener('click',function(){
        liked_part_left1.innerHTML=""
        liked_part_right1.innerHTML=""
        var otherid=localStorage.getItem('otherid')
        console.log(otherid);
        data_menu2_p1.className=''
        data_menu1_p1.className=''
        data_menu3_p1.className='data_menu_p_click'
        note_part1.style.display='none'
        collection_part1.style.display='none'
        liked_part1.style.display='block'
        var like_url='http://175.178.193.182:8080/article/getLike'
        var like_params={userId:otherid}
        axios.get(like_url,{params:like_params}).then(function(res){
            console.log(res);
            var i=0;
            for(i=0;i<res.data.likedArticles.length;i++){
                var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                var liked_part_11=document.createElement('div')
                liked_part_11.innerHTML = liked_part_1;
                if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                    liked_part_left1.appendChild(liked_part_11)
                }else
                if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                    liked_part_right1.appendChild(liked_part_11)
                }
            }   
        })
    })
    //详情内收藏
    var recommend_page_main_search_bottom_collection=document.querySelector('#recommend_page_main_search_bottom_collection')
    var recommend_page_main_search_bottom_like=document.querySelector('#recommend_page_main_search_bottom_like')
    var recommend_page_main_search_bottom_discuss=document.querySelector('#recommend_page_main_search_bottom_discuss')
    var recommend_page_main_search_bottom_collection_span=document.querySelector('#recommend_page_main_search_bottom_collection_span')
    var recommend_page_main_search_bottom_collection_number=document.querySelector('#recommend_page_main_search_bottom_collection_number')
    recommend_page_main_search_bottom_collection.addEventListener('click',function(){
        if(recommend_page_main_search_bottom_collection_span.className==="recommend_page_main_search_bottom_collection_span_click2"){
            var the_article_id=localStorage.getItem('the_article_id')
            var recommend_page_main_search_bottom_collection_obj={
                userId:userId,
                articleId:the_article_id
            }
            var recommend_page_main_search_bottom_collection_url='http://175.178.193.182:8080/article/star'
            axios.post(recommend_page_main_search_bottom_collection_url,recommend_page_main_search_bottom_collection_obj).then(function(res){
                console.log(res);
                console.log(the_article_id);
            })
            recommend_page_main_search_bottom_collection_span.className="recommend_page_main_search_bottom_collection_span_click1"
            recommend_page_main_search_bottom_collection_number.innerHTML=parseInt(recommend_page_main_search_bottom_collection_number.innerHTML)+parseInt(1)
        }else
        if(recommend_page_main_search_bottom_collection_span.className==="recommend_page_main_search_bottom_collection_span_click1"){
            var the_article_id=localStorage.getItem('the_article_id')
            var recommend_page_main_search_bottom_collection_obj={
                userId:userId,
                articleId:the_article_id
            }
            var recommend_page_main_search_bottom_collection_url='http://175.178.193.182:8080/article/unstar'
            axios.post(recommend_page_main_search_bottom_collection_url,recommend_page_main_search_bottom_collection_obj).then(function(res){
                console.log(res);
            })
            recommend_page_main_search_bottom_collection_span.className="recommend_page_main_search_bottom_collection_span_click2"
            recommend_page_main_search_bottom_collection_number.innerHTML=parseInt(recommend_page_main_search_bottom_collection_number.innerHTML)-parseInt(1)
        }    
    })
    //详情内点赞
    var recommend_page_main_search_bottom_like=document.querySelector('#recommend_page_main_search_bottom_like')
    var recommend_page_main_search_bottom_like_span=document.querySelector('#recommend_page_main_search_bottom_like_span')
    var recommend_page_main_search_bottom_like_number=document.querySelector('#recommend_page_main_search_bottom_like_number')
    recommend_page_main_search_bottom_like_span.addEventListener('click',function(){
        if(recommend_page_main_search_bottom_like_span.className==='notlike'){
            var the_article_id=localStorage.getItem('the_article_id')
            var recommend_page_main_search_bottom_like_obj={
                userId:userId,
                articleId:the_article_id
            }
            var recommend_page_main_search_bottom_like_url='http://175.178.193.182:8080/article/like'
            axios.post(recommend_page_main_search_bottom_like_url,recommend_page_main_search_bottom_like_obj).then(function(res){
                console.log(res);
            })
            recommend_page_main_search_bottom_like_span.className='likeone'
            recommend_page_main_search_bottom_like_number.innerHTML=parseInt(recommend_page_main_search_bottom_like_number.innerHTML)+parseInt(1)
        }else
        if(recommend_page_main_search_bottom_like_span.className==='likeone'){
            var the_article_id=localStorage.getItem('the_article_id')
            var recommend_page_main_search_bottom_like_obj={
                userId:userId,
                articleId:the_article_id
            }
            var recommend_page_main_search_bottom_like_url='http://175.178.193.182:8080/article/unlike'
            axios.post(recommend_page_main_search_bottom_like_url,recommend_page_main_search_bottom_like_obj).then(function(res){
                console.log(res);
            })
            recommend_page_main_search_bottom_like_span.className='notlike'
            recommend_page_main_search_bottom_like_number.innerHTML=parseInt(recommend_page_main_search_bottom_like_number.innerHTML)-parseInt(1)
        }
    })
    //推荐详情页内的轮播图
    var recommend_page=document.querySelector('#recommend_page')
    recommend_page.addEventListener('click',function(){
        var ol=document.querySelector('#circle')
        var ul=document.querySelector('#recommend_page_main_picture_ul')
        console.log(ul);
        var width=384
        console.log(width);
        ol.addEventListener('click',function(e){
            var t=e.target
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className=' ';
            }
            console.log(t);
            t.className='current'
            var index=t.getAttribute('index');
            console.log(index);
            console.log(parseInt(index)*parseInt(width)+'px');
            var left=-parseInt(index)*parseInt(width)+'px'
            ul.style.translateX =left
            console.log(ul.style.translateX);
            ul.style.transform = 'translateX('+left+')'
        })
    })
    //旅行详情页内的轮播图
    var travel_page=document.querySelector('#travel_page')
    travel_page.addEventListener('click',function(){
        var ol=document.querySelector('#circle')
        var ul=document.querySelector('#recommend_page_main_picture_ul')
        console.log(ul);
        var width=384
        console.log(width);
        ol.addEventListener('click',function(e){
            var t=e.target
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className=' ';
            }
            console.log(t);
            t.className='current'
            var index=t.getAttribute('index');
            console.log(index);
            console.log(parseInt(index)*parseInt(width)+'px');
            var left=-parseInt(index)*parseInt(width)+'px'
            ul.style.translateX =left
            console.log(ul.style.translateX);
            ul.style.transform = 'translateX('+left+')'
        })
    })
    //美食详情页内的轮播图
    var food_page=document.querySelector('#food_page')
    food_page.addEventListener('click',function(){
        var ol=document.querySelector('#circle')
        var ul=document.querySelector('#recommend_page_main_picture_ul')
        console.log(ul);
        var width=384
        console.log(width);
        ol.addEventListener('click',function(e){
            var t=e.target
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className=' ';
            }
            console.log(t);
            t.className='current'
            var index=t.getAttribute('index');
            console.log(index);
            console.log(parseInt(index)*parseInt(width)+'px');
            var left=-parseInt(index)*parseInt(width)+'px'
            ul.style.translateX =left
            console.log(ul.style.translateX);
            ul.style.transform = 'translateX('+left+')'
        })
    })
    //时尚详情页内的轮播图
    var fashion_page=document.querySelector('#fashion_page')
    fashion_page.addEventListener('click',function(){
        var ol=document.querySelector('#circle')
        var ul=document.querySelector('#recommend_page_main_picture_ul')
        console.log(ul);
        var width=384
        console.log(width);
        ol.addEventListener('click',function(e){
            var t=e.target
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className=' ';
            }
            console.log(t);
            t.className='current'
            var index=t.getAttribute('index');
            console.log(index);
            console.log(parseInt(index)*parseInt(width)+'px');
            var left=-parseInt(index)*parseInt(width)+'px'
            ul.style.translateX =left
            console.log(ul.style.translateX);
            ul.style.transform = 'translateX('+left+')'
        })
    })
    //美妆详情页内的轮播图
    var beauty_page=document.querySelector('#beauty_page')
    beauty_page.addEventListener('click',function(){
        var ol=document.querySelector('#circle')
        var ul=document.querySelector('#recommend_page_main_picture_ul')
        console.log(ul);
        var width=384
        console.log(width);
        ol.addEventListener('click',function(e){
            var t=e.target
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className=' ';
            }
            console.log(t);
            t.className='current'
            var index=t.getAttribute('index');
            console.log(index);
            console.log(parseInt(index)*parseInt(width)+'px');
            var left=-parseInt(index)*parseInt(width)+'px'
            ul.style.translateX =left
            console.log(ul.style.translateX);
            ul.style.transform = 'translateX('+left+')'
        })
    })
    //高效详情页内的轮播图
    var efficience_page=document.querySelector('#efficience_page')
    efficience_page.addEventListener('click',function(){
        var ol=document.querySelector('#circle')
        var ul=document.querySelector('#recommend_page_main_picture_ul')
        console.log(ul);
        var width=384
        console.log(width);
        ol.addEventListener('click',function(e){
            var t=e.target
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className=' ';
            }
            console.log(t);
            t.className='current'
            var index=t.getAttribute('index');
            console.log(index);
            console.log(parseInt(index)*parseInt(width)+'px');
            var left=-parseInt(index)*parseInt(width)+'px'
            ul.style.translateX =left
            console.log(ul.style.translateX);
            ul.style.transform = 'translateX('+left+')'
        })
    })
    //护肤详情页内的轮播图
    var skin_page=document.querySelector('#skin_page')
    skin_page.addEventListener('click',function(){
        var ol=document.querySelector('#circle')
        var ul=document.querySelector('#recommend_page_main_picture_ul')
        console.log(ul);
        var width=384
        console.log(width);
        ol.addEventListener('click',function(e){
            var t=e.target
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className=' ';
            }
            console.log(t);
            t.className='current'
            var index=t.getAttribute('index');
            console.log(index);
            console.log(parseInt(index)*parseInt(width)+'px');
            var left=-parseInt(index)*parseInt(width)+'px'
            ul.style.translateX =left
            console.log(ul.style.translateX);
            ul.style.transform = 'translateX('+left+')'
        })
    })
    //详情内进入发二级评论页面
    var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
    recommend_page_main_discussion.addEventListener('click',function(e){
        var t=e.target
        console.log(t.className);
        //var articleId=t.parentNode.parentNode.getAttribute('articleid')
        var reviewId=t.parentNode.parentNode.parentNode.getAttribute('reviewId')
        console.log(reviewId);
        var articleid=t.parentNode.parentNode.parentNode.getAttribute('articleid') 
        localStorage.setItem('reviewId',reviewId)
        localStorage.setItem('articleid',articleid)
        var authorid=t.parentNode.parentNode.parentNode.getAttribute('authorid') 
        localStorage.setItem('authorid',authorid)
        if(t.className==='first_discussion'){         
            var click_search2=document.querySelector('#click_search2')
            click_search2.style.display='block'
        }
    })
    //回退
    var second=document.querySelector('#second')
    var foot=document.querySelector('#foot')
    var other_center=document.querySelector('#other_center')
    var other_back=document.querySelector('#other_back')
    other_back.addEventListener('click',function(){
        other_center.style.display='none'
        second.style.display='block'
        foot.style.display='block'
    })
    //点击跳转到发评论
    var recommend_page_main_discuss_input=document.querySelector('#recommend_page_main_discuss_input')
    var click_search=document.querySelector('#click_search')
    recommend_page_main_discuss_input.addEventListener('click',function(){
        click_search.style.display='block'
        recommend_page_main_discuss_input.blur()
    })
    //退出发评论部分
    var click_search_headdiv=document.querySelector('#click_search_headdiv')
    click_search_headdiv.addEventListener('click',function(){
        click_search.style.display='none'
    })
    var click_search2_headdiv=document.querySelector('#click_search2_headdiv')
    var click_search_headdiv2=document.querySelector('#click_search_headdiv2')
    click_search_headdiv2.addEventListener('click',function(){
        click_search2.style.display='none'
    })
    //详情内的评论区一级评论点赞
    var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
    recommend_page_main_discussion.addEventListener('click',function(e){
        var t=e.target
        if(t.id=='recommend_page_main_discussion_like'&&t.className=='notlike'){
            var reviewId=t.parentNode.parentNode.parentNode.getAttribute('reviewid')
            var like_url='http://175.178.193.182:8080/review/like'
            var like_obj={
                userId:userId,
                reviewId:reviewId
            }
            axios.post(like_url,like_obj).then(function(res){
                console.log(res);
            })
            t.nextSibling.innerHTML=parseInt(t.nextSibling.innerHTML)+parseInt(1)
            t.className='likeone'
        }else
        if(t.id=='recommend_page_main_discussion_like'&&t.className=='likeone'){
            var reviewId=t.parentNode.parentNode.parentNode.getAttribute('reviewid')
            var like_url='http://175.178.193.182:8080/review/unlike'
            var like_obj={
                userId:userId,
                reviewId:reviewId
            }
            axios.post(like_url,like_obj).then(function(res){
                console.log(res);
            })
            t.nextSibling.innerHTML=parseInt(t.nextSibling.innerHTML)-parseInt(1)
            t.className='notlike'
        }else
        if(t.id=='delete_discussion_btn'){
            console.log('delete一下!');
            var reviewId=t.parentNode.parentNode.parentNode.getAttribute('reviewid')
            var delete_url='http://175.178.193.182:8080/review/delete'
            var obj={
                reviewId:reviewId
            }
            axios.post(delete_url,obj).then(function(res){
                console.log(res);
                t.parentNode.parentNode.parentNode.remove()
            })
        }
    })
    //二级评论
    var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
    recommend_page_main_discussion.addEventListener('click',function(e){
        var t=e.target
        if(t.id=='recommend_page_main_discussion_like2'&&t.className=='notlike'){
            var reviewId=t.parentNode.parentNode.parentNode.getAttribute('reviewid')
            var like_url='http://175.178.193.182:8080/review/like'
            var like_obj={
                userId:userId,
                reviewId:reviewId
            }
            axios.post(like_url,like_obj).then(function(res){
                console.log(res);
            })
            t.nextSibling.innerHTML=parseInt(t.nextSibling.innerHTML)+parseInt(1)
            t.className='likeone'
        }else
        if(t.id=='recommend_page_main_discussion_like2'&&t.className=='likeone'){
            var reviewId=t.parentNode.parentNode.parentNode.getAttribute('reviewid')
            var like_url='http://175.178.193.182:8080/review/unlike'
            var like_obj={
                userId:userId,
                reviewId:reviewId
            }
            axios.post(like_url,like_obj).then(function(res){
                console.log(res);
            })
            t.nextSibling.innerHTML=parseInt(t.nextSibling.innerHTML)-parseInt(1)
            t.className='notlike'
        }
    })
    //退出详情页面
    var recommend_page_main_back=document.querySelector('#recommend_page_main_back')
    var recommend_page_main_picture_ul=document.querySelector('#recommend_page_main_picture_ul')
    var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
    var circle=document.querySelector('#circle')
    recommend_page_main_back.addEventListener('click',function(){
        recommend_page_main.style.display='none'
        second.style.display='block'
        foot.style.display='block'
        var i=0;        
        recommend_page_main_picture_ul.innerHTML=""
        recommend_page_main_discussion.innerHTML=""
        circle.innerHTML=""
    })
    //进入搜索页面
    var head_span1=document.querySelector('#head_span1')
    var search_page=document.querySelector('#search_page')
    head_span1.addEventListener('click',function(){
        second.style.display='none'
        foot.style.display='none'
        search_page.style.display='block'
    })
    var search_page_head_input=document.querySelector('#search_page_head_input')
    var search_page_head_btn=document.querySelector('#search_page_head_btn')
    var search_page_article_left=document.querySelector('#search_page_article_left')
    var search_page_article_right=document.querySelector('#search_page_article_right')
    var search_page_head_back=document.querySelector('#search_page_head_back')
    var search_page_user=document.querySelector('#search_page_user')
    //退出搜索页面
    search_page_head_back.addEventListener('click',function(){
        second.style.display='block'
        foot.style.display='block'
        search_page.style.display='none'
        search_page_head_input.value=""
        search_page_article_left.innerHTML=""
        search_page_article_right.innerHTML=""
        search_page_user.innerHTML=""
    })
    var search_page_head_input=document.querySelector('#search_page_head_input')
    var search_page_head_btn=document.querySelector('#search_page_head_btn')
    var keyWord=search_page_head_input.value
    //点击按钮依据关键字搜索
    search_page_head_btn.addEventListener('click',function(){
        var search_word_url='http://175.178.193.182:8080/search/byArticle'
        var search_obj={
            keyWord:search_page_head_input.value
        }
        console.log(search_page_head_input.value);
        var search_page_article_left=document.querySelector('#search_page_article_left')
        var search_page_article_right=document.querySelector('#search_page_article_right')
        var search_page_user=document.querySelector('#search_page_user')
        search_page_article_left.innerHTML=""
        search_page_article_right.innerHTML=""
        search_page_user.innerHTML=""
        axios.get(search_word_url,{params:search_obj}).then(function(res){
            console.log(res);
            search_page_article_left=document.querySelector('#search_page_article_left')
            search_page_article_right=document.querySelector('#search_page_article_right')
            for(i=0;i<res.data.articles.length;i++){
                var search_page_article_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                var search_page_article_left_11=document.createElement('div')
                search_page_article_left_11.innerHTML = search_page_article_left_0;
                if(search_page_article_right.clientHeight>search_page_article_left.clientHeight){
                    search_page_article_left.appendChild(search_page_article_left_11)
                }
                if(search_page_article_right.clientHeight<=search_page_article_left.clientHeight){
                    search_page_article_right.appendChild(search_page_article_left_11)
                }
                search_page_article_left_11.setAttribute('articleId',res.data.articles[i].articleId)
                search_page_article_left_11.setAttribute('authorId',res.data.articles[i].authorId)
                var like=search_page_article_left_11.childNodes[0].childNodes[4] 
                var j=0
                for(j=0;j<res.data.articles[i].likes;j++){
                    if(res.data.articles[i].likerList[j]===userId){
                            like.className='likeone'
                            break
                        }else{
                            like.className='notlike'
                        }
                    }
                    if(res.data.articles[i].likes===0){
                        like.className='notlike'
                    }
                }
        })
        var search_people_url='http://175.178.193.182:8080/search/byUser'
        var search_page_user=document.querySelector('#search_page_user')
        axios.get(search_people_url,{params:search_obj}).then(function(res){
            var arr=new Array
            var btn=new Array
            console.log(res);
            for(let i=0;i<res.data.users.length;i++){
                var search_page_user_content='<div id="follower"><img src="'+res.data.users[i].avatar+'" alt="" id="follower_head"><span id="follower_name">'+res.data.users[i].nickname+'</span><button id="follower_btn">已关注</button></div>'
                var search_page_user_div=document.createElement('div')
                search_page_user_div.innerHTML = search_page_user_content;
                search_page_user_div.setAttribute('hisId',res.data.users[i].userId)
                search_page_user.appendChild(search_page_user_div)
                arr[i]=res.data.users[i].userId
                btn[i]=search_page_user_div.childNodes[0].childNodes[2]
                var search_people_one_Id={
                    userId:userId
                }
                var search_people_one_url='http://175.178.193.182:8080/user/followerList'
                axios.get(search_people_one_url,{params:search_people_one_Id}).then(function(a){
                    console.log(a);
                    for(let j=0;j<a.data.followsList.length;j++){
                        if(a.data.followsList[j].userId==arr[i]){
                            console.log(btn[i]);
                            btn[i].innerHTML='已关注'
                            break
                        }else
                        if(a.data.followsList[j].userId!=arr[i]){
                            btn[i].innerHTML='未关注'
                        }
                    }
                })
                //search_page_user_div.setAttribute('followerId',res.data.followsList[i].userId)
            }
        })
    })
    //搜索部分关注
    search_page_user.addEventListener('click',function(e){
        var t=e.target
        if(t.id=='follower_btn'){
            if(t.innerHTML=='未关注'){
                var follow_url='http://175.178.193.182:8080/user/follow'
                var followerId=t.parentNode.parentNode.getAttribute('hisid')
                let formData = new FormData()
                formData.append('followerId',followerId)
                formData.append('userId',userId)
                axios.post(follow_url,formData).then(function(res){
                    console.log(res);
                })
                t.innerHTML='已关注' 
            }else
            if(t.innerHTML=='已关注'){
                var cancel_follower_url='http://175.178.193.182:8080/user/cancelFollow'
                var followerId=t.parentNode.parentNode.getAttribute('hisid')
                let formData = new FormData()
                formData.append('followerId',followerId)
                formData.append('userId',userId)
                axios.post(cancel_follower_url,formData).then(function(res){
                    console.log(res);
                })
                t.innerHTML='未关注'
            }
        }
    })
    //点击文章键跳转
    var search_page_menu_article=document.querySelector('#search_page_menu_article')
    var search_page_menu_user=document.querySelector('#search_page_menu_user')
    var search_page_menu_article_p=document.querySelector('#search_page_menu_article_p')
    var search_page_menu_user_p=document.querySelector('#search_page_menu_user_p')
    var search_page_article=document.querySelector('#search_page_article')
    var search_page_user=document.querySelector('#search_page_user')
    search_page_menu_article.addEventListener('click',function(){
        search_page_article.style.display='block'
        search_page_user.style.display='none'
        search_page_menu_article_p.className='data_menu_p_click'
        search_page_menu_user_p.className=''
    })
    //点击用户键跳转
    search_page_menu_user.addEventListener('click',function(){
        search_page_article.style.display='none'
        search_page_user.style.display='block'
        search_page_menu_article_p.className=''
        search_page_menu_user_p.className='data_menu_p_click'
    })
    //点击赞和收藏按钮跳转
    var news=document.querySelector('#news')
    var news_menu_iconpart1=document.querySelector('#news_menu_iconpart1')
    var news_menu_iconpart1_1=document.querySelector('#news_menu_iconpart1_1')
    var news_menu_iconpart1_1_head_back=document.querySelector('#news_menu_iconpart1_1_head_back')
    var news_menu_iconpart1_1=document.querySelector('#news_menu_iconpart1_1')
    var news_menu_iconpart1_1_main=document.querySelector('#news_menu_iconpart1_1_main')
    news_menu_iconpart1.addEventListener('click',function(){
        news_menu_iconpart1_1_main.innerHTML=""
        news_menu_iconpart1_1.style.display='block'
        news.style.display='none'
        foot.style.display='none'
        //渲染内部
        var news_menu_iconpart1_url='http://175.178.193.182:8080/notice/article/like'
        var news_menu_iconpart1_obj={
            userId:userId
        }
        axios.get(news_menu_iconpart1_url,{params:news_menu_iconpart1_obj}).then(function(res){
            console.log(res);
            var i=0
            for(i=0;i<res.data.like.length;i++){
                var news_menu_iconpart1_1_like='<div id="news_menu_iconpart1_1_like"><img src="'+res.data.like[i].userInfo.avatar+'" alt="" id="news_menu_iconpart1_1_like_head"><img src="'+res.data.like[i].articleInfo.images[0]+'" alt="" id="news_menu_iconpart1_1_like_img"><p id="news_menu_iconpart1_1_like_name">'+res.data.like[i].userInfo.nickname+'</p><p id="news_menu_iconpart1_1_like_word">点赞了你的笔记</p> </div>'
                var news_menu_iconpart1_1_like1=document.createElement('div')
                news_menu_iconpart1_1_like1.innerHTML = news_menu_iconpart1_1_like;
                news_menu_iconpart1_1_main.appendChild(news_menu_iconpart1_1_like1)
            }
        })
    })
    //赞和收藏返回按钮
    news_menu_iconpart1_1_head_back.addEventListener('click',function(){
        news_menu_iconpart1_1.style.display='none'
        news.style.display='block'
        foot.style.display='block'
    })
    //获取我的评论
    var news_menu_iconpart2=document.querySelector('#news_menu_iconpart2')
    var news_menu_iconpart2_1=document.querySelector('#news_menu_iconpart2_1')
    var news_menu_iconpart2_1_head_back=document.querySelector('#news_menu_iconpart2_1_head_back')
    var news_menu_iconpart2_1=document.querySelector('#news_menu_iconpart2_1')
    var news_menu_iconpart2_1_main=document.querySelector('#news_menu_iconpart2_1_main')
    news_menu_iconpart2.addEventListener('click',function(){
        console.log(userId);
        news_menu_iconpart2_1_main.innerHTML=""
        news_menu_iconpart2_1.style.display='block'
        news.style.display='none'
        foot.style.display='none'
        //渲染内部
        var news_menu_iconpart2_url='http://175.178.193.182:8080/notice/comment'
        var news_menu_iconpart2_obj={
            userId:7
        }
        axios.get(news_menu_iconpart2_url,{params:news_menu_iconpart2_obj}).then(function(res){
            console.log(res);
            var news_menu_iconpart2_1_main=document.querySelector('#news_menu_iconpart2_1_main')
            var i=0
            for(i=0;i<res.data.like.length;i++){
                var news_menu_iconpart1_1_like='<div id="news_menu_iconpart1_1_like"><img src="'+res.data.like[i].userInfo.avatar+'" alt="" id="news_menu_iconpart1_1_like_head"><img src="'+res.data.like[i].articleInfo.images[0]+'" alt="" id="news_menu_iconpart1_1_like_img"><p id="news_menu_iconpart1_1_like_name">'+res.data.like[i].userInfo.nickname+'</p><p id="news_menu_iconpart1_1_like_word">评论了你的笔记</p> </div>'
                var news_menu_iconpart1_1_like1=document.createElement('div')
                news_menu_iconpart1_1_like1.innerHTML = news_menu_iconpart1_1_like;
                news_menu_iconpart2_1_main.appendChild(news_menu_iconpart1_1_like1)
            }
        })
    })
    //评论和@返回按钮
    news_menu_iconpart2_1_head_back.addEventListener('click',function(){
        news_menu_iconpart2_1.style.display='none'
        news.style.display='block'
        foot.style.display='block'
    })
    //点击新增关注跳转跳转
    var news_menu_iconpart3=document.querySelector('#news_menu_iconpart3')
    var news_menu_iconpart3_1=document.querySelector('#news_menu_iconpart3_1')
    var news_menu_iconpart3_1_main=document.querySelector('#news_menu_iconpart3_1_main')
    news_menu_iconpart3.addEventListener('click',function(){
        news_menu_iconpart3_1_main.innerHTML=""
        news_menu_iconpart3_1.style.display='block'
        news.style.display='none'
        foot.style.display='none'
    })
    var news_menu_iconpart3_1_head_back=document.querySelector('#news_menu_iconpart3_1_head_back')
    news_menu_iconpart3_1_head_back.addEventListener('click',function(){
        news_menu_iconpart3_1.style.display='none'
        news.style.display='block'
        foot.style.display='block'
    })
    //跳转找人发消息
    var news_head_create=document.querySelector('#news_head_create')
    var chat_people=document.querySelector('#chat_people')
    var chat_people_back=document.querySelector('#chat_people_back')
    var chat_people_content=document.querySelector('#chat_people_content')
    news_head_create.addEventListener('click',function(){
        chat_people.style.display='block'
        foot.style.display='none'
        news.style.display='none'
        chat_people_content.innerHTML=""
        var arr=new Array
        var follow_url='http://175.178.193.182:8080/user/followerList'
        var follow_params={userId:userId}
        axios.get(follow_url,{params:follow_params}).then(function(res){
            console.log(res);
            follow_number.innerHTML=res.data.followsList.length
            for(let i=0;i<res.data.followsList.length;i++){
                var follow_page_content='<div id="follower"><img src="'+res.data.followsList[i].avatar+'" alt="" id="follower_head"><span id="follower_name">'+res.data.followsList[i].nickname+'</span><button id="chat_btn">发消息</button></div>'
                var follow_page_div=document.createElement('div')
                follow_page_div.innerHTML = follow_page_content;
                follow_page_div.setAttribute('followerId',res.data.followsList[i].userId)
                var followerId=follow_page_div.getAttribute('followerId')
                console.log(followerId);
                var follow_url='http://175.178.193.182:8080/user/followerList'
                var followerId={
                    userId:followerId
                }
                console.log(follow_page_div);
                arr[i]=follow_page_div
                axios.get(follow_url,{params:followerId}).then(function(e){
                    console.log(i);
                    console.log(e);
                    console.log(arr[i]);
                    for(let j=0;j<e.data.followsList.length;j++){
                        if(parseInt(e.data.followsList[j].userId)===parseInt(userId)){
                            chat_people_content.appendChild(arr[i])
                            break
                        }
                    }
                })
                /* var enter_chat_page=follow_page_div.childNodes[0].childNodes[2]
                console.log(enter_chat_page);
                var chat_page=document.querySelector('#chat_page')
                var chat_page_content_content=document.querySelector('#chat_page_content_content')
                chat_page_content_content.scrollTop = chat_page_content_content.scrollHeight;
                chat_people_content.addEventListener('click',function(e){
                    var t=e.target
                    if(t.id==='chat_btn'){
                        chat_page_content_content.innerHTML=""
                        var chat_people_Id=t.parentNode.parentNode.getAttribute('followerid')
                        console.log(chat_people_Id);
                        localStorage.setItem('chat_people_Id',chat_people_Id)
                        chat_people.style.display='none'
                        chat_page.style.display='block'
                        console.log(chat_people_Id);
                        //改聊天页面对方的昵称
                        var the_url='http://175.178.193.182:8080/user/baseInfo'
                        var chat_man_nickname=document.querySelector('#chat_man_nickname')
                        var paramsObj={userId:chat_people_Id} 
                        axios.get(the_url,{params:paramsObj}).then(function(a){
                            console.log(a);
                            chat_man_nickname.innerHTML=a.data.user.nickname
                        })
                        //获取聊天记录
                        var get_past_chat_url='http://175.178.193.182:8080/chat/getRecord'
                        console.log(userId);
                        console.log(chat_people_Id);
                        let formData = new FormData()
                        formData.append('userId', userId)
                        formData.append('receiverId', chat_people_Id)
                        formData.append('page', 1)
                        var data={
                            userId:userId,
                            receiverId:chat_people_Id,
                            page:1
                        }
                        axios.get(get_past_chat_url,{params:data}).then(function(b){
                            console.log(b);
                            for(let l=0;l<b.data.newRecord.length;l++){
                                if(parseInt(b.data.newRecord[l].userId)===parseInt(userId)){
                                    var the_url='http://175.178.193.182:8080/user/baseInfo' 
                                    var Id={
                                        userId:b.data.newRecord[l].userId
                                    }
                                    axios.get(the_url,{params:Id}).then(function(a){
                                        var rightdiv=document.createElement('div')
                                        var rightdiv1='<div id="rightdiv"><img src="'+a.data.user.avatar+'" alt="" id="userimg1"><div id="userchat1">'+b.data.newRecord[l].message+'</div></div>'
                                        rightdiv.innerHTML=rightdiv1
                                        chat_page_content_content.appendChild(rightdiv)
                                        console.log(l);
                                    })
                                }else
                                if(parseInt(b.data.newRecord[l].userId)!=parseInt(userId)){
                                    var the_url='http://175.178.193.182:8080/user/baseInfo' 
                                    var Id={
                                        userId:b.data.newRecord[l].userId
                                    }
                                    axios.get(the_url,{params:Id}).then(function(a){
                                        var leftdiv=document.createElement('div')
                                        var leftdiv1='<div id="leftdiv"><img src="'+a.data.user.avatar+'" alt="" id="userimg"><div id="userchat">'+b.data.newRecord[l].message+'</div></div>'
                                        leftdiv.innerHTML=leftdiv1
                                        chat_page_content_content.appendChild(leftdiv)
                                        console.log(l);
                                    })
                                }
                            }
                        })
                    }
                }) */
                //enter_chat_page.addEventListener('click',function(){
                //    var chat_people_Id=enter_chat_page.parentNode.parentNode.getAttribute('followerid')
                //    localStorage.setItem('chat_people_Id',chat_people_Id)
                //    chat_people.style.display='none'
                //    chat_page.style.display='block'
                //    console.log(chat_people_Id);
                //    //改聊天页面对方的昵称
                //    var the_url='http://175.178.193.182:8080/user/baseInfo'
                //    var chat_man_nickname=document.querySelector('#chat_man_nickname')
                //    var paramsObj={userId:chat_people_Id} 
                //    axios.get(the_url,{params:paramsObj}).then(function(a){
                //        console.log(a);
                //        chat_man_nickname.innerHTML=a.data.user.nickname
                //    })
                //    //获取聊天记录
                //    var get_past_chat_url='http://175.178.193.182:8080/chat/getRecord'
                //    console.log(userId);
                //    console.log(chat_people_Id);
                //    let formData = new FormData()
                //    formData.append('userId', userId)
                //    formData.append('receiverId', chat_people_Id)
                //    formData.append('page', 1)
                //    var data={
                //        userId:userId,
                //        receiverId:chat_people_Id,
                //        page:1
                //    }
                //    axios.get(get_past_chat_url,{params:data}).then(function(b){
                //        console.log(b);
                //    })
                //})
            }
        })
    })
    var chat_page=document.querySelector('#chat_page')
    var chat_page_content_content=document.querySelector('#chat_page_content_content')
    chat_people_content.addEventListener('click',function(e){
        var t=e.target
        if(t.id==='chat_btn'){
            chat_page_content_content.innerHTML=""
            var chat_people_Id=t.parentNode.parentNode.getAttribute('followerid')
            console.log(chat_people_Id);
            localStorage.setItem('chat_people_Id',chat_people_Id)
            chat_people.style.display='none'
            chat_page.style.display='block'
            console.log(chat_people_Id);
            //改聊天页面对方的昵称
            var the_url='http://175.178.193.182:8080/user/baseInfo'
            var chat_man_nickname=document.querySelector('#chat_man_nickname')
            var paramsObj={userId:chat_people_Id} 
            axios.get(the_url,{params:paramsObj}).then(function(a){
                console.log(a);
                chat_man_nickname.innerHTML=a.data.user.nickname
            })
            //获取聊天记录
            var get_past_chat_url='http://175.178.193.182:8080/chat/getRecord'
            console.log(userId);
            console.log(chat_people_Id);
            let formData = new FormData()
            formData.append('userId', userId)
            formData.append('receiverId', chat_people_Id)
            formData.append('page', 1)
            var data={
                userId:userId,
                receiverId:chat_people_Id,
                page:1
            }
            axios.get(get_past_chat_url,{params:data}).then(function(b){
                console.log(b);
                for(let l=0;l<b.data.newRecord.length;l++){
                    if(parseInt(b.data.newRecord[l].userId)===parseInt(userId)){
                        var the_url='http://175.178.193.182:8080/user/baseInfo' 
                        var Id={
                            userId:b.data.newRecord[l].userId
                        }
                        axios.get(the_url,{params:Id}).then(function(a){
                            var rightdiv=document.createElement('div')
                            var rightdiv1='<div id="rightdiv"><img src="'+a.data.user.avatar+'" alt="" id="userimg1"><div id="userchat1">'+b.data.newRecord[l].message+'</div></div>'
                            rightdiv.innerHTML=rightdiv1
                            chat_page_content_content.appendChild(rightdiv)
                            chat_page_content_content.scrollTop = chat_page_content_content.scrollHeight;
                        })
                    }else
                    if(parseInt(b.data.newRecord[l].userId)!=parseInt(userId)){
                        var the_url='http://175.178.193.182:8080/user/baseInfo' 
                        var Id={
                            userId:b.data.newRecord[l].userId
                        }
                        axios.get(the_url,{params:Id}).then(function(a){
                            var leftdiv=document.createElement('div')
                            var leftdiv1='<div id="leftdiv"><img src="'+a.data.user.avatar+'" alt="" id="userimg"><div id="userchat">'+b.data.newRecord[l].message+'</div></div>'
                            leftdiv.innerHTML=leftdiv1
                            chat_page_content_content.appendChild(leftdiv)
                            chat_page_content_content.scrollTop = chat_page_content_content.scrollHeight;
                        })
                    }
                }
            })
        }
    })
    var chat_page_content_content=document.querySelector('#chat_page_content_content')
    chat_people_back.addEventListener('click',function(){
        chat_people.style.display='none'
        foot.style.display='block'
        news.style.display='block'
        chat_page_content_content
    })
    //ws部分
    var chat_page_back=document.querySelector('#chat_page_back')
    var chat_page=document.querySelector('#chat_page')
    var chat_page_content=document.querySelector('#chat_page_content')
    chat_page_back.addEventListener('click',function(){
        chat_people.style.display='block'
        chat_page.style.display='none'
    })
    var chat_people_Id=localStorage.getItem('chat_people_Id')
    var chat_page_content_btn=document.querySelector('#chat_page_content_btn')
    var chat_page_content_input=document.querySelector('#chat_page_content_input')
    var userId_string=userId+''
    var chat_people_Id_string=chat_people_Id+''
    var chat_page_content=document.querySelector('#chat_page_content')
    function render(chatId,message){
        var the_url='http://175.178.193.182:8080/user/baseInfo' 
        var Id={
            userId:chatId
        }
        axios.get(the_url,{params:Id}).then(function(a){
            console.log(a);
            var leftdiv=document.createElement('div')
            var leftdiv1='<div id="leftdiv"><img src="'+a.data.user.avatar+'" alt="" id="userimg"><div id="userchat">'+message+'</div></div>'
            leftdiv.innerHTML=leftdiv1
            chat_page_content_content.appendChild(leftdiv)
            chat_page_content_content.scrollTop = chat_page_content_content.scrollHeight;
        })
    }
    let socket=io.connect("ws://175.178.193.182:8080/chat")
    socket.on("connect",()=>{
        socket.emit("online",userId)
        socket.on("receive-message",(res)=>{
            render(res.userId,res.message)
        })
    })
    function ws(){
        socket.emit("send-message",{
            userId:userId_string,
            receiverId:chat_people_Id_string,
            message:chat_page_content_input.value
        })
    }
    chat_page_content_btn.addEventListener('click',function(){
        if(chat_page_content_input.value!=''){
            console.log(chat_page_content_input.value);
            ws()
            var the_url='http://175.178.193.182:8080/user/baseInfo' 
            var Id={
                userId:userId
            }
            axios.get(the_url,{params:Id}).then(function(a){
                console.log(a);
                var rightdiv=document.createElement('div')
                var rightdiv1='<div id="rightdiv"><img src="'+a.data.user.avatar+'" alt="" id="userimg1"><div id="userchat1">'+chat_page_content_input.value+'</div></div>'
                rightdiv.innerHTML=rightdiv1
                chat_page_content_content.appendChild(rightdiv)
                chat_page_content_content.scrollTop = chat_page_content_content.scrollHeight;
            })
            let formData = new FormData()
            formData.append('userId', userId)
            formData.append('receiverId', chat_people_Id)
            formData.append('message', chat_page_content_input.value)
            var send_message_url='http://175.178.193.182:8080/chat/send'
            axios.post(send_message_url,formData).then(function(res){
                chat_page_content_input.value=""
                console.log(res);
            })
        }
    })
    //点击旅行文章图片或标题进入详情页面
    travel_page.addEventListener('click',function(e){
        let t=e.target
        console.log(t);
        if(t.id==='recommend_page_left_p1'||t.id==='recommend_page_head_top'){
            recommend_page_main.style.display='block'
            second.style.display='none'
            foot.style.display='none'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            var articleid=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('articleid',articleid)
            localStorage.setItem('authorid',authorid)
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_head=document.querySelector('#recommend_page_main_head')
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_btn=document.querySelector('#recommend_page_main_btn')
            var recommend_page_main_picture_li=document.querySelector('#recommend_page_main_picture_li')
            var recommend_page_main_picture_li_img=document.querySelector('#recommend_page_main_picture_li_img')
            var recommend_page_main_picture_ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_title=document.querySelector('#recommend_page_main_title')
            var recommend_page_main_title_p=document.querySelector('#recommend_page_main_title_p')
            var recommend_page_main_content_p=document.querySelector('#recommend_page_main_content_p')
            var recommend_page_main_tag_span2=document.querySelector('#recommend_page_main_tag_span2')
            var recommend_page_main_bottom_span1=document.querySelector('#recommend_page_main_bottom_span1')
            var recommend_page_main_bottom_span2=document.querySelector('#recommend_page_main_bottom_span2')
            var ol=document.querySelector('#circle')
            var ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_picture=document.querySelector('#recommend_page_main_picture')
            //渲染详情页面            
            var recommend_page_main_url='http://175.178.193.182:8080/article/byId'
            var articleId=t.parentNode.parentNode.getAttribute('articleId')
            var paramsObj={articleId:articleId}
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0
                for(i=0;i<res.data.article.images.length;i++){
                    var recommend_page_main_picture_li='<img src="./picture/login_bg1.jpg" alt="" id="recommend_page_main_picture_li_img">'
                    var recommend_page_main_picture_li1=document.createElement('li')
                    recommend_page_main_picture_li1.innerHTML=recommend_page_main_picture_li
                    recommend_page_main_picture_ul.appendChild(recommend_page_main_picture_li1)
                    recommend_page_main_picture_li1.childNodes[0].src=res.data.article.images[i];
                    recommend_page_main_title_p.innerHTML=res.data.article.title
                    recommend_page_main_content_p.innerHTML=res.data.article.content
                    recommend_page_main_tag_span2.innerHTML=res.data.article.tags
                    recommend_page_main_bottom_span1.innerHTML=res.data.article.postDate
                    var li=document.createElement('li');
                    li.setAttribute('index',i);
                    ol.appendChild(li);
                    ol.children[0].className='current';
                }
            })
            //获取收藏人数
            var recommend_page_main_search_bottom_collection_number=document.querySelector('#recommend_page_main_search_bottom_collection_number')
            var recommend_page_main_search_bottom_collection_span=document.querySelector('#recommend_page_main_search_bottom_collection_span')
            var recommend_page_main_search_bottom_like_span=document.querySelector('#recommend_page_main_search_bottom_like_span')
            var recommend_page_main_search_bottom_like_number=document.querySelector('#recommend_page_main_search_bottom_like_number')
            var myID=localStorage.getItem('myID')
            console.log(myID);
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                recommend_page_main_search_bottom_collection_number.innerHTML=res.data.article.starerList.length
                var i=0
                for(i=0;i<res.data.article.starerList.length;i++){
                    if(res.data.article.starerList[i]===myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click1'
                    }else
                    if(res.data.article.starerList[i]!=myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click2'
                    }
                }
                //获取点赞人数
                recommend_page_main_search_bottom_like_number.innerHTML=res.data.article.likerList.length
                if(res.data.article.likerList.length==0){
                    recommend_page_main_search_bottom_like_span.className='notlike'
                }
                for(i=0;i<res.data.article.likerList.length;i++){
                    //console.log(res.data.article.likerList[i]);
                    if(res.data.article.likerList[i]===myID){
                        recommend_page_main_search_bottom_like_span.className='likeone'
                        break
                    }else
                    if(res.data.article.likerList[i]!=myID){
                        recommend_page_main_search_bottom_like_span.className='notlike'
                    }
                }
            })  
            //获取评论并渲染评论
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            var articleId=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('the_article_id',articleId)
            var recommend_page_main_discussion_number_num=document.querySelector('#recommend_page_main_discussion_number_num')
            var recommend_page_main_discussion_nickname=document.querySelector('#recommend_page_main_discussion_nickname')
            var recommend_page_main_discussion_content=document.querySelector('#recommend_page_main_discussion_content')
            var recommend_page_main_discussion_like_number=document.querySelector('#recommend_page_main_discussion_like_number')
            var discussion_url='http://175.178.193.182:8080/review/byArticle'
            var discussion_Obj={
                articleId:articleId,
                pages:0
            }
            axios.get(discussion_url,{params:discussion_Obj}).then(function(res){
                console.log(res);
                recommend_page_main_discussion_number_num.innerHTML=res.data.reviews.length
                //一级评论
                for(let i=0;i<res.data.reviews.length;i++){
                    if(parseInt(res.data.reviews[i].authorId)!=parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }else
                    if(parseInt(res.data.reviews[i].authorId)===parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p><button id="delete_discussion_btn">删除</button></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }
                    recommend_page_main_discussion_div11.setAttribute('reviewId',res.data.reviews[i].reviewId);
                    recommend_page_main_discussion_div11.setAttribute('articleId',res.data.reviews[i].replyToArticleId);
                    recommend_page_main_discussion_div11.setAttribute('authorId',res.data.reviews[i].authorId);
                    var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                    var review_authorId=res.data.reviews[i].authorId
                    var baseInfo_obj={
                        userId:review_authorId
                    }
                    axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                        console.log(res);
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[0].src=res.data.user.avatar
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                    })
                    var like=recommend_page_main_discussion_div11.childNodes[0].childNodes[2].childNodes[0]
                    var j=0
                    if(res.data.reviews[i].likerList.length===0){
                        like.className='notlike'
                    }
                    for(j=0;j<res.data.reviews[i].likerList.length;j++){
                        if(res.data.reviews[i].likerList[j]===myID){
                            like.className='likeone'
                            break
                        }else
                        if(res.data.reviews[i].likerList[j]!=myID){
                            like.className='notlike'
                        }
                    }
                    //渲染二级评论
                    if(res.data.reviews[i].reviewList.length!=0){
                        for(let j=0;j<res.data.reviews[i].reviewList.length;j++){
                            var second_review_authorId=res.data.reviews[i].reviewList[j].authorId
                            var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                            var review_authorId=res.data.reviews[i].authorId
                            var baseInfo_obj={
                                userId:second_review_authorId
                            }
                            axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                                console.log(res);
                                console.log(recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[0]);
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[0].src=res.data.user.avatar
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                            })
                            if(parseInt(res.data.reviews[i].reviewList[j].authorId)===parseInt(myID)){
                                var second_discussion='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head1"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].reviewList[j].authorId+'</p><p id="recommend_page_main_discussion_content">'+res.data.reviews[i].reviewList[j].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like2"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].reviewList[j].likes+'</p><button id="delete_discussion_btn">删除</button></div></div>'
                                var second_discussion_div=document.createElement('div')
                                second_discussion_div.innerHTML=second_discussion
                                recommend_page_main_discussion_div11.appendChild(second_discussion_div)
                            }else
                            if(parseInt(res.data.reviews[i].reviewList[j].authorId)!=parseInt(myID)){
                                var second_discussion='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head1"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].reviewList[j].authorId+'</p><p id="recommend_page_main_discussion_content">'+res.data.reviews[i].reviewList[j].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like2"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].reviewList[j].likes+'</p></div></div>'
                                var second_discussion_div=document.createElement('div')
                                second_discussion_div.innerHTML=second_discussion
                                recommend_page_main_discussion_div11.appendChild(second_discussion_div)
                            }
                            second_discussion_div.setAttribute('reviewId',res.data.reviews[i].reviewList[j].reviewId)
                            var second_like=second_discussion_div.childNodes[0].childNodes[2].childNodes[0]
                            if(res.data.reviews[i].reviewList[j].likerList.length===0){
                                second_like.className='notlike'
                            }
                            var k=0
                            console.log(second_like);
                            console.log(res.data.reviews[i].reviewList[j].likerList.length);
                            for(k=0;k<res.data.reviews[i].reviewList[j].likerList.length;k++){
                                if(res.data.reviews[i].reviewList[j].likerList[k]===myID){
                                    second_like.className='likeone'
                                    break
                                }else
                                if(res.data.reviews[i].reviewList[j].likerList[k]!=myID){
                                    second_like.className='notlike'
                                }
                            }
                        }
                    }
                }
            })
            //获取文章用户信息渲染头像和昵称
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            console.log(t.parentNode.parentNode);
            var userobj={userId:userId}
            var userId_url='http://175.178.193.182:8080/user/fullInfo'
            axios.get(userId_url,{params:userobj}).then(function(res){
                console.log(res);
                recommend_page_main_head.src=res.data.user.avatar
                recommend_page_main_nickname.innerHTML=res.data.user.nickname
            })
            //获取用户个人的关注列表确认是否有关注该用户
            var myID=localStorage.getItem('myID')
            var myID_data={userId:myID}
            var myID_url='http://175.178.193.182:8080/user/followerList'
            axios.get(myID_url,{params:myID_data}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.followsList.length;i++){
                    if(res.data.followsList[i].userId==userId){
                        recommend_page_main_btn.innerHTML='已关注'
                        break
                    }else
                    if(res.data.followsList[i].userId!=userId){
                        recommend_page_main_btn.innerHTML='未关注'
                    }
                }
            })
            //点击头像进入
            recommend_page_main_head.addEventListener('click',function(){
                second.style.display='none'
                foot.style.display='none'
                var data_menu11=document.querySelector('#data_menu11')
                //渲染页面            
                var other_center_url='http://175.178.193.182:8080/user/fullInfo'
                var authorid=t.parentNode.parentNode.getAttribute('authorid')
                localStorage.setItem('otherid',authorid)
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var paramsObj={userId:authorid}
                axios.get(other_center_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var header_img1=document.querySelector('#header_img1')
                    var header_span1=document.querySelector('#header_span1')
                    header_img1.src=res.data.user.avatar
                    header_span1.innerHTML=res.data.user.nickname
                    var center_follow1=document.querySelector('#center_follow1')
                    var follow_page1=document.querySelector('#follow_page1')
                    var follow_page_main1=document.querySelector('#follow_page_main1')
                    var follow_number1=document.querySelector('#follow_number1')
                    var fans_number1=document.querySelector('#fans_number1')
                    var follow_url='http://175.178.193.182:8080/user/followerList'
                    var follow_params={userId:authorid}
                    axios.get(follow_url,{params:follow_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.followsList.length);
                        follow_number1.innerHTML=res.data.followsList.length
                    })
                    var fans_url='http://175.178.193.182:8080/user/fanList'
                    var fans_params={userId:authorid}
                    axios.get(fans_url,{params:fans_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.fansList.length);
                        fans_number1.innerHTML=res.data.fansList.length
                    })
                    var collection_number1=document.querySelector('#collection_number1')
                    var like_url='http://175.178.193.182:8080/article/getLike'
                    var like_params={userId:authorid}
                    axios.get(like_url,{params:like_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.likedArticles.length);
                        localStorage.setItem('like_number1',res.data.likedArticles.length)
                    })
                    var like_number1=localStorage.getItem('like_number1')
                    console.log(like_number1);
                    var star_url='http://175.178.193.182:8080/article/getStar'
                    var star_params={userId:authorid}
                    axios.get(star_url,{params:star_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.staredArticles.length);
                        localStorage.setItem('star_number1',res.data.staredArticles.length)
                    })
                    var star_number1=localStorage.getItem('star_number1')
                    console.log(star_number1);
                    var collection1=parseInt(like_number1)+parseInt(star_number1)
                    console.log(collection1);
                    collection_number1.innerHTML=collection1
                })
                var data_menu1_p1=document.querySelector('#data_menu1_p1')
                var data_menu2_p1=document.querySelector('#data_menu2_p1')
                var data_menu3_p1=document.querySelector('#data_menu3_p1')
                var note_part1=document.querySelector('#note_part1')
                var collection_part1=document.querySelector('#collection_part1')
                var liked_part1=document.querySelector('#liked_part1')
                var note_part_left1=document.querySelector('#note_part_left1')
                var note_part_right1=document.querySelector('#note_part_right1')
                var collection_part_left1=document.querySelector('#collection_part_left1')
                var collection_part_right1=document.querySelector('#collection_part_right1')
                var liked_part_left1=document.querySelector('#liked_part_left1')
                var liked_part_right1=document.querySelector('#liked_part_right1')
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                note_part_left1.innerHTML=""
                note_part_right1.innerHTML=""
                var main_url='http://175.178.193.182:8080/article/byAuthor'
                var paramsObj={authorId:otherid}
                axios.get(main_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.articles.length;i++){
                        var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                        var recommend_page_left_11=document.createElement('div')
                        recommend_page_left_11.innerHTML = recommend_page_left_0;
                        if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                            note_part_right1.appendChild(recommend_page_left_11)
                        }else
                        if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                            note_part_left1.appendChild(recommend_page_left_11)
                        }
                    }
                })
                collection_part_left1.innerHTML=""
                collection_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:otherid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.staredArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                            collection_part_left1.appendChild(liked_part_11)
                        }else
                        if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                            collection_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })
                liked_part_left1.innerHTML=""
                liked_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:otherid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.likedArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                            liked_part_left1.appendChild(liked_part_11)
                        }else
                        if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                            liked_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })

            })
            //获取用户个人基本信息拿到头像渲染进页面
            //var recommend_page_main_discuss_head=document.querySelector('#recommend_page_main_discuss_head')
            //var myIDobj={userId:myID}
            //var myId_url='http://175.178.193.182:8080/user/baseInfo'
            //axios.get(myId_url,{params:myIDobj}).then(function(res){
            //    console.log(res);
            //    recommend_page_main_discuss_head.src=res.data.user.avatar
            //})
            //获取评论人数
            var recommend_page_main_search_bottom_discuss_number=document.querySelector('#recommend_page_main_search_bottom_discuss_number')
            var discuss_url='http://175.178.193.182:8080/notice/comment'
            axios.get(discuss_url,{params:myIDobj}).then(function(res){
                console.log(res);
                recommend_page_main_search_bottom_discuss_number.innerHTML=res.data.like.length
            })
        } 
        //进入个人页面
        if(t.id==='recommend_page_head'){
            var other_center=document.querySelector('#other_center')
            other_center.style.display='block'
            second.style.display='none'
            foot.style.display='none'
            var data_menu11=document.querySelector('#data_menu11')
            //渲染页面            
            var other_center_url='http://175.178.193.182:8080/user/fullInfo'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            localStorage.setItem('otherid',authorid)
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var paramsObj={userId:authorid}
            axios.get(other_center_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var header_img1=document.querySelector('#header_img1')
                var header_span1=document.querySelector('#header_span1')
                header_img1.src=res.data.user.avatar
                header_span1.innerHTML=res.data.user.nickname
                var center_follow1=document.querySelector('#center_follow1')
                var follow_page1=document.querySelector('#follow_page1')
                var follow_page_main1=document.querySelector('#follow_page_main1')
                var follow_number1=document.querySelector('#follow_number1')
                var fans_number1=document.querySelector('#fans_number1')
                var follow_url='http://175.178.193.182:8080/user/followerList'
                var follow_params={userId:authorid}
                axios.get(follow_url,{params:follow_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.followsList.length);
                    follow_number1.innerHTML=res.data.followsList.length
                })
                var fans_url='http://175.178.193.182:8080/user/fanList'
                var fans_params={userId:authorid}
                axios.get(fans_url,{params:fans_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.fansList.length);
                    fans_number1.innerHTML=res.data.fansList.length
                })
                var collection_number1=document.querySelector('#collection_number1')
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:authorid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.likedArticles.length);
                    localStorage.setItem('like_number1',res.data.likedArticles.length)
                })
                var like_number1=localStorage.getItem('like_number1')
                console.log(like_number1);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:authorid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.staredArticles.length);
                    localStorage.setItem('star_number1',res.data.staredArticles.length)
                })
                var star_number1=localStorage.getItem('star_number1')
                console.log(star_number1);
                var collection1=parseInt(like_number1)+parseInt(star_number1)
                console.log(collection1);
                collection_number1.innerHTML=collection1
            })
            var data_menu1_p1=document.querySelector('#data_menu1_p1')
            var data_menu2_p1=document.querySelector('#data_menu2_p1')
            var data_menu3_p1=document.querySelector('#data_menu3_p1')
            var note_part1=document.querySelector('#note_part1')
            var collection_part1=document.querySelector('#collection_part1')
            var liked_part1=document.querySelector('#liked_part1')
            var note_part_left1=document.querySelector('#note_part_left1')
            var note_part_right1=document.querySelector('#note_part_right1')
            var collection_part_left1=document.querySelector('#collection_part_left1')
            var collection_part_right1=document.querySelector('#collection_part_right1')
            var liked_part_left1=document.querySelector('#liked_part_left1')
            var liked_part_right1=document.querySelector('#liked_part_right1')
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            note_part_left1.innerHTML=""
            note_part_right1.innerHTML=""
            var main_url='http://175.178.193.182:8080/article/byAuthor'
            var paramsObj={authorId:otherid}
            axios.get(main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.articles.length;i++){
                    var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                    var recommend_page_left_11=document.createElement('div')
                    recommend_page_left_11.innerHTML = recommend_page_left_0;
                    if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                        note_part_right1.appendChild(recommend_page_left_11)
                    }else
                    if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                        note_part_left1.appendChild(recommend_page_left_11)
                    }
                }
            })
            collection_part_left1.innerHTML=""
            collection_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var star_url='http://175.178.193.182:8080/article/getStar'
            var star_params={userId:otherid}
            axios.get(star_url,{params:star_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.staredArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                        collection_part_left1.appendChild(liked_part_11)
                    }else
                    if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                        collection_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
            liked_part_left1.innerHTML=""
            liked_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var like_url='http://175.178.193.182:8080/article/getLike'
            var like_params={userId:otherid}
            axios.get(like_url,{params:like_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.likedArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                        liked_part_left1.appendChild(liked_part_11)
                    }else
                    if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                        liked_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
        }
    })
    //点击美食文章图片或标题进入详情页面
    food_page.addEventListener('click',function(e){
        let t=e.target
        console.log(t);
        if(t.id==='recommend_page_left_p1'||t.id==='recommend_page_head_top'){
            recommend_page_main.style.display='block'
            second.style.display='none'
            foot.style.display='none'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            var articleid=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('articleid',articleid)
            localStorage.setItem('authorid',authorid)
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_head=document.querySelector('#recommend_page_main_head')
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_btn=document.querySelector('#recommend_page_main_btn')
            var recommend_page_main_picture_li=document.querySelector('#recommend_page_main_picture_li')
            var recommend_page_main_picture_li_img=document.querySelector('#recommend_page_main_picture_li_img')
            var recommend_page_main_picture_ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_title=document.querySelector('#recommend_page_main_title')
            var recommend_page_main_title_p=document.querySelector('#recommend_page_main_title_p')
            var recommend_page_main_content_p=document.querySelector('#recommend_page_main_content_p')
            var recommend_page_main_tag_span2=document.querySelector('#recommend_page_main_tag_span2')
            var recommend_page_main_bottom_span1=document.querySelector('#recommend_page_main_bottom_span1')
            var recommend_page_main_bottom_span2=document.querySelector('#recommend_page_main_bottom_span2')
            var ol=document.querySelector('#circle')
            var ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_picture=document.querySelector('#recommend_page_main_picture')
            //渲染详情页面            
            var recommend_page_main_url='http://175.178.193.182:8080/article/byId'
            var articleId=t.parentNode.parentNode.getAttribute('articleId')
            var paramsObj={articleId:articleId}
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0
                for(i=0;i<res.data.article.images.length;i++){
                    var recommend_page_main_picture_li='<img src="./picture/login_bg1.jpg" alt="" id="recommend_page_main_picture_li_img">'
                    var recommend_page_main_picture_li1=document.createElement('li')
                    recommend_page_main_picture_li1.innerHTML=recommend_page_main_picture_li
                    recommend_page_main_picture_ul.appendChild(recommend_page_main_picture_li1)
                    recommend_page_main_picture_li1.childNodes[0].src=res.data.article.images[i];
                    recommend_page_main_title_p.innerHTML=res.data.article.title
                    recommend_page_main_content_p.innerHTML=res.data.article.content
                    recommend_page_main_tag_span2.innerHTML=res.data.article.tags
                    recommend_page_main_bottom_span1.innerHTML=res.data.article.postDate
                    var li=document.createElement('li');
                    li.setAttribute('index',i);
                    ol.appendChild(li);
                    ol.children[0].className='current';
                }
            })
            //获取收藏人数
            var recommend_page_main_search_bottom_collection_number=document.querySelector('#recommend_page_main_search_bottom_collection_number')
            var recommend_page_main_search_bottom_collection_span=document.querySelector('#recommend_page_main_search_bottom_collection_span')
            var recommend_page_main_search_bottom_like_span=document.querySelector('#recommend_page_main_search_bottom_like_span')
            var recommend_page_main_search_bottom_like_number=document.querySelector('#recommend_page_main_search_bottom_like_number')
            var myID=localStorage.getItem('myID')
            console.log(myID);
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                recommend_page_main_search_bottom_collection_number.innerHTML=res.data.article.starerList.length
                var i=0
                for(i=0;i<res.data.article.starerList.length;i++){
                    if(res.data.article.starerList[i]===myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click1'
                    }else
                    if(res.data.article.starerList[i]!=myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click2'
                    }
                }
                //获取点赞人数
                recommend_page_main_search_bottom_like_number.innerHTML=res.data.article.likerList.length
                if(res.data.article.likerList.length==0){
                    recommend_page_main_search_bottom_like_span.className='notlike'
                }
                for(i=0;i<res.data.article.likerList.length;i++){
                    //console.log(res.data.article.likerList[i]);
                    if(res.data.article.likerList[i]===myID){
                        recommend_page_main_search_bottom_like_span.className='likeone'
                        break
                    }else
                    if(res.data.article.likerList[i]!=myID){
                        recommend_page_main_search_bottom_like_span.className='notlike'
                    }
                }
            })  
            //获取评论并渲染评论
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            var articleId=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('the_article_id',articleId)
            var recommend_page_main_discussion_number_num=document.querySelector('#recommend_page_main_discussion_number_num')
            var recommend_page_main_discussion_nickname=document.querySelector('#recommend_page_main_discussion_nickname')
            var recommend_page_main_discussion_content=document.querySelector('#recommend_page_main_discussion_content')
            var recommend_page_main_discussion_like_number=document.querySelector('#recommend_page_main_discussion_like_number')
            var discussion_url='http://175.178.193.182:8080/review/byArticle'
            var discussion_Obj={
                articleId:articleId,
                pages:0
            }
            axios.get(discussion_url,{params:discussion_Obj}).then(function(res){
                console.log(res);
                recommend_page_main_discussion_number_num.innerHTML=res.data.reviews.length
                //一级评论
                for(let i=0;i<res.data.reviews.length;i++){
                    if(parseInt(res.data.reviews[i].authorId)!=parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }else
                    if(parseInt(res.data.reviews[i].authorId)===parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p><button id="delete_discussion_btn">删除</button></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }
                    recommend_page_main_discussion_div11.setAttribute('reviewId',res.data.reviews[i].reviewId);
                    recommend_page_main_discussion_div11.setAttribute('articleId',res.data.reviews[i].replyToArticleId);
                    recommend_page_main_discussion_div11.setAttribute('authorId',res.data.reviews[i].authorId);
                    var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                    var review_authorId=res.data.reviews[i].authorId
                    var baseInfo_obj={
                        userId:review_authorId
                    }
                    axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                        console.log(res);
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[0].src=res.data.user.avatar
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                    })
                    var like=recommend_page_main_discussion_div11.childNodes[0].childNodes[2].childNodes[0]
                    var j=0
                    if(res.data.reviews[i].likerList.length===0){
                        like.className='notlike'
                    }
                    for(j=0;j<res.data.reviews[i].likerList.length;j++){
                        if(res.data.reviews[i].likerList[j]===myID){
                            like.className='likeone'
                            break
                        }else
                        if(res.data.reviews[i].likerList[j]!=myID){
                            like.className='notlike'
                        }
                    }
                    //渲染二级评论
                    if(res.data.reviews[i].reviewList.length!=0){
                        for(let j=0;j<res.data.reviews[i].reviewList.length;j++){
                            var second_review_authorId=res.data.reviews[i].reviewList[j].authorId
                            var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                            var review_authorId=res.data.reviews[i].authorId
                            var baseInfo_obj={
                                userId:second_review_authorId
                            }
                            axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                                console.log(res);
                                console.log(recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[0]);
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[0].src=res.data.user.avatar
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                            })
                            if(parseInt(res.data.reviews[i].reviewList[j].authorId)===parseInt(myID)){
                                var second_discussion='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head1"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].reviewList[j].authorId+'</p><p id="recommend_page_main_discussion_content">'+res.data.reviews[i].reviewList[j].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like2"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].reviewList[j].likes+'</p><button id="delete_discussion_btn">删除</button></div></div>'
                                var second_discussion_div=document.createElement('div')
                                second_discussion_div.innerHTML=second_discussion
                                recommend_page_main_discussion_div11.appendChild(second_discussion_div)
                            }else
                            if(parseInt(res.data.reviews[i].reviewList[j].authorId)!=parseInt(myID)){
                                var second_discussion='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head1"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].reviewList[j].authorId+'</p><p id="recommend_page_main_discussion_content">'+res.data.reviews[i].reviewList[j].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like2"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].reviewList[j].likes+'</p></div></div>'
                                var second_discussion_div=document.createElement('div')
                                second_discussion_div.innerHTML=second_discussion
                                recommend_page_main_discussion_div11.appendChild(second_discussion_div)
                            }
                            second_discussion_div.setAttribute('reviewId',res.data.reviews[i].reviewList[j].reviewId)
                            var second_like=second_discussion_div.childNodes[0].childNodes[2].childNodes[0]
                            if(res.data.reviews[i].reviewList[j].likerList.length===0){
                                second_like.className='notlike'
                            }
                            var k=0
                            console.log(second_like);
                            console.log(res.data.reviews[i].reviewList[j].likerList.length);
                            for(k=0;k<res.data.reviews[i].reviewList[j].likerList.length;k++){
                                if(res.data.reviews[i].reviewList[j].likerList[k]===myID){
                                    second_like.className='likeone'
                                    break
                                }else
                                if(res.data.reviews[i].reviewList[j].likerList[k]!=myID){
                                    second_like.className='notlike'
                                }
                            }
                        }
                    }
                }
            })
            //获取文章用户信息渲染头像和昵称
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            var userobj={userId:userId}
            var userId_url='http://175.178.193.182:8080/user/fullInfo'
            axios.get(userId_url,{params:userobj}).then(function(res){
                console.log(res);
                recommend_page_main_head.src=res.data.user.avatar
                recommend_page_main_nickname.innerHTML=res.data.user.nickname
            })
            //获取用户个人的关注列表确认是否有关注该用户
            var myID=localStorage.getItem('myID')
            var myID_data={userId:myID}
            var myID_url='http://175.178.193.182:8080/user/followerList'
            axios.get(myID_url,{params:myID_data}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.followsList.length;i++){
                    if(res.data.followsList[i].userId==userId){
                        recommend_page_main_btn.innerHTML='已关注'
                        break
                    }else
                    if(res.data.followsList[i].userId!=userId){
                        recommend_page_main_btn.innerHTML='未关注'
                    }
                }
            })
            //点击头像进入
            recommend_page_main_head.addEventListener('click',function(){
                second.style.display='none'
                foot.style.display='none'
                var data_menu11=document.querySelector('#data_menu11')
                //渲染页面            
                var other_center_url='http://175.178.193.182:8080/user/fullInfo'
                var authorid=t.parentNode.parentNode.getAttribute('authorid')
                localStorage.setItem('otherid',authorid)
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var paramsObj={userId:authorid}
                axios.get(other_center_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var header_img1=document.querySelector('#header_img1')
                    var header_span1=document.querySelector('#header_span1')
                    header_img1.src=res.data.user.avatar
                    header_span1.innerHTML=res.data.user.nickname
                    var center_follow1=document.querySelector('#center_follow1')
                    var follow_page1=document.querySelector('#follow_page1')
                    var follow_page_main1=document.querySelector('#follow_page_main1')
                    var follow_number1=document.querySelector('#follow_number1')
                    var fans_number1=document.querySelector('#fans_number1')
                    var follow_url='http://175.178.193.182:8080/user/followerList'
                    var follow_params={userId:authorid}
                    axios.get(follow_url,{params:follow_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.followsList.length);
                        follow_number1.innerHTML=res.data.followsList.length
                    })
                    var fans_url='http://175.178.193.182:8080/user/fanList'
                    var fans_params={userId:authorid}
                    axios.get(fans_url,{params:fans_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.fansList.length);
                        fans_number1.innerHTML=res.data.fansList.length
                    })
                    var collection_number1=document.querySelector('#collection_number1')
                    var like_url='http://175.178.193.182:8080/article/getLike'
                    var like_params={userId:authorid}
                    axios.get(like_url,{params:like_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.likedArticles.length);
                        localStorage.setItem('like_number1',res.data.likedArticles.length)
                    })
                    var like_number1=localStorage.getItem('like_number1')
                    console.log(like_number1);
                    var star_url='http://175.178.193.182:8080/article/getStar'
                    var star_params={userId:authorid}
                    axios.get(star_url,{params:star_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.staredArticles.length);
                        localStorage.setItem('star_number1',res.data.staredArticles.length)
                    })
                    var star_number1=localStorage.getItem('star_number1')
                    console.log(star_number1);
                    var collection1=parseInt(like_number1)+parseInt(star_number1)
                    console.log(collection1);
                    collection_number1.innerHTML=collection1
                })
                var data_menu1_p1=document.querySelector('#data_menu1_p1')
                var data_menu2_p1=document.querySelector('#data_menu2_p1')
                var data_menu3_p1=document.querySelector('#data_menu3_p1')
                var note_part1=document.querySelector('#note_part1')
                var collection_part1=document.querySelector('#collection_part1')
                var liked_part1=document.querySelector('#liked_part1')
                var note_part_left1=document.querySelector('#note_part_left1')
                var note_part_right1=document.querySelector('#note_part_right1')
                var collection_part_left1=document.querySelector('#collection_part_left1')
                var collection_part_right1=document.querySelector('#collection_part_right1')
                var liked_part_left1=document.querySelector('#liked_part_left1')
                var liked_part_right1=document.querySelector('#liked_part_right1')
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                note_part_left1.innerHTML=""
                note_part_right1.innerHTML=""
                var main_url='http://175.178.193.182:8080/article/byAuthor'
                var paramsObj={authorId:otherid}
                axios.get(main_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.articles.length;i++){
                        var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                        var recommend_page_left_11=document.createElement('div')
                        recommend_page_left_11.innerHTML = recommend_page_left_0;
                        if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                            note_part_right1.appendChild(recommend_page_left_11)
                        }else
                        if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                            note_part_left1.appendChild(recommend_page_left_11)
                        }
                    }
                })
                collection_part_left1.innerHTML=""
                collection_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:otherid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.staredArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                            collection_part_left1.appendChild(liked_part_11)
                        }else
                        if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                            collection_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })
                liked_part_left1.innerHTML=""
                liked_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:otherid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.likedArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                            liked_part_left1.appendChild(liked_part_11)
                        }else
                        if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                            liked_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })

            })
            //获取用户个人基本信息拿到头像渲染进页面
            //var recommend_page_main_discuss_head=document.querySelector('#recommend_page_main_discuss_head')
            //var myIDobj={userId:myID}
            //var myId_url='http://175.178.193.182:8080/user/baseInfo'
            //axios.get(myId_url,{params:myIDobj}).then(function(res){
            //    console.log(res);
            //    recommend_page_main_discuss_head.src=res.data.user.avatar
            //})
            //获取评论人数
            var recommend_page_main_search_bottom_discuss_number=document.querySelector('#recommend_page_main_search_bottom_discuss_number')
            var discuss_url='http://175.178.193.182:8080/notice/comment'
            axios.get(discuss_url,{params:myIDobj}).then(function(res){
                console.log(res);
                recommend_page_main_search_bottom_discuss_number.innerHTML=res.data.like.length
            })
        } 
        //进入个人页面
        if(t.id==='recommend_page_head'){
            var other_center=document.querySelector('#other_center')
            other_center.style.display='block'
            second.style.display='none'
            foot.style.display='none'
            var data_menu11=document.querySelector('#data_menu11')
            //渲染页面            
            var other_center_url='http://175.178.193.182:8080/user/fullInfo'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            localStorage.setItem('otherid',authorid)
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var paramsObj={userId:authorid}
            axios.get(other_center_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var header_img1=document.querySelector('#header_img1')
                var header_span1=document.querySelector('#header_span1')
                header_img1.src=res.data.user.avatar
                header_span1.innerHTML=res.data.user.nickname
                var center_follow1=document.querySelector('#center_follow1')
                var follow_page1=document.querySelector('#follow_page1')
                var follow_page_main1=document.querySelector('#follow_page_main1')
                var follow_number1=document.querySelector('#follow_number1')
                var fans_number1=document.querySelector('#fans_number1')
                var follow_url='http://175.178.193.182:8080/user/followerList'
                var follow_params={userId:authorid}
                axios.get(follow_url,{params:follow_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.followsList.length);
                    follow_number1.innerHTML=res.data.followsList.length
                })
                var fans_url='http://175.178.193.182:8080/user/fanList'
                var fans_params={userId:authorid}
                axios.get(fans_url,{params:fans_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.fansList.length);
                    fans_number1.innerHTML=res.data.fansList.length
                })
                var collection_number1=document.querySelector('#collection_number1')
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:authorid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.likedArticles.length);
                    localStorage.setItem('like_number1',res.data.likedArticles.length)
                })
                var like_number1=localStorage.getItem('like_number1')
                console.log(like_number1);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:authorid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.staredArticles.length);
                    localStorage.setItem('star_number1',res.data.staredArticles.length)
                })
                var star_number1=localStorage.getItem('star_number1')
                console.log(star_number1);
                var collection1=parseInt(like_number1)+parseInt(star_number1)
                console.log(collection1);
                collection_number1.innerHTML=collection1
            })
            var data_menu1_p1=document.querySelector('#data_menu1_p1')
            var data_menu2_p1=document.querySelector('#data_menu2_p1')
            var data_menu3_p1=document.querySelector('#data_menu3_p1')
            var note_part1=document.querySelector('#note_part1')
            var collection_part1=document.querySelector('#collection_part1')
            var liked_part1=document.querySelector('#liked_part1')
            var note_part_left1=document.querySelector('#note_part_left1')
            var note_part_right1=document.querySelector('#note_part_right1')
            var collection_part_left1=document.querySelector('#collection_part_left1')
            var collection_part_right1=document.querySelector('#collection_part_right1')
            var liked_part_left1=document.querySelector('#liked_part_left1')
            var liked_part_right1=document.querySelector('#liked_part_right1')
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            note_part_left1.innerHTML=""
            note_part_right1.innerHTML=""
            var main_url='http://175.178.193.182:8080/article/byAuthor'
            var paramsObj={authorId:otherid}
            axios.get(main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.articles.length;i++){
                    var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                    var recommend_page_left_11=document.createElement('div')
                    recommend_page_left_11.innerHTML = recommend_page_left_0;
                    if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                        note_part_right1.appendChild(recommend_page_left_11)
                    }else
                    if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                        note_part_left1.appendChild(recommend_page_left_11)
                    }
                }
            })
            collection_part_left1.innerHTML=""
            collection_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var star_url='http://175.178.193.182:8080/article/getStar'
            var star_params={userId:otherid}
            axios.get(star_url,{params:star_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.staredArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                        collection_part_left1.appendChild(liked_part_11)
                    }else
                    if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                        collection_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
            liked_part_left1.innerHTML=""
            liked_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var like_url='http://175.178.193.182:8080/article/getLike'
            var like_params={userId:otherid}
            axios.get(like_url,{params:like_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.likedArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                        liked_part_left1.appendChild(liked_part_11)
                    }else
                    if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                        liked_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
        }
    })
    //点击时尚文章图片或标题进入详情页面
    fashion_page.addEventListener('click',function(e){
        let t=e.target
        console.log(t);
        if(t.id==='recommend_page_left_p1'||t.id==='recommend_page_head_top'){
            recommend_page_main.style.display='block'
            second.style.display='none'
            foot.style.display='none'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            var articleid=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('articleid',articleid)
            localStorage.setItem('authorid',authorid)
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_head=document.querySelector('#recommend_page_main_head')
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_btn=document.querySelector('#recommend_page_main_btn')
            var recommend_page_main_picture_li=document.querySelector('#recommend_page_main_picture_li')
            var recommend_page_main_picture_li_img=document.querySelector('#recommend_page_main_picture_li_img')
            var recommend_page_main_picture_ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_title=document.querySelector('#recommend_page_main_title')
            var recommend_page_main_title_p=document.querySelector('#recommend_page_main_title_p')
            var recommend_page_main_content_p=document.querySelector('#recommend_page_main_content_p')
            var recommend_page_main_tag_span2=document.querySelector('#recommend_page_main_tag_span2')
            var recommend_page_main_bottom_span1=document.querySelector('#recommend_page_main_bottom_span1')
            var recommend_page_main_bottom_span2=document.querySelector('#recommend_page_main_bottom_span2')
            var ol=document.querySelector('#circle')
            var ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_picture=document.querySelector('#recommend_page_main_picture')
            //渲染详情页面            
            var recommend_page_main_url='http://175.178.193.182:8080/article/byId'
            var articleId=t.parentNode.parentNode.getAttribute('articleId')
            var paramsObj={articleId:articleId}
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0
                for(i=0;i<res.data.article.images.length;i++){
                    var recommend_page_main_picture_li='<img src="./picture/login_bg1.jpg" alt="" id="recommend_page_main_picture_li_img">'
                    var recommend_page_main_picture_li1=document.createElement('li')
                    recommend_page_main_picture_li1.innerHTML=recommend_page_main_picture_li
                    recommend_page_main_picture_ul.appendChild(recommend_page_main_picture_li1)
                    recommend_page_main_picture_li1.childNodes[0].src=res.data.article.images[i];
                    recommend_page_main_title_p.innerHTML=res.data.article.title
                    recommend_page_main_content_p.innerHTML=res.data.article.content
                    recommend_page_main_tag_span2.innerHTML=res.data.article.tags
                    recommend_page_main_bottom_span1.innerHTML=res.data.article.postDate
                    var li=document.createElement('li');
                    li.setAttribute('index',i);
                    ol.appendChild(li);
                    ol.children[0].className='current';
                }
            })
            //获取收藏人数
            var recommend_page_main_search_bottom_collection_number=document.querySelector('#recommend_page_main_search_bottom_collection_number')
            var recommend_page_main_search_bottom_collection_span=document.querySelector('#recommend_page_main_search_bottom_collection_span')
            var recommend_page_main_search_bottom_like_span=document.querySelector('#recommend_page_main_search_bottom_like_span')
            var recommend_page_main_search_bottom_like_number=document.querySelector('#recommend_page_main_search_bottom_like_number')
            var myID=localStorage.getItem('myID')
            console.log(myID);
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                recommend_page_main_search_bottom_collection_number.innerHTML=res.data.article.starerList.length
                var i=0
                for(i=0;i<res.data.article.starerList.length;i++){
                    if(res.data.article.starerList[i]===myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click1'
                    }else
                    if(res.data.article.starerList[i]!=myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click2'
                    }
                }
                //获取点赞人数
                recommend_page_main_search_bottom_like_number.innerHTML=res.data.article.likerList.length
                if(res.data.article.likerList.length==0){
                    recommend_page_main_search_bottom_like_span.className='notlike'
                }
                for(i=0;i<res.data.article.likerList.length;i++){
                    //console.log(res.data.article.likerList[i]);
                    if(res.data.article.likerList[i]===myID){
                        recommend_page_main_search_bottom_like_span.className='likeone'
                        break
                    }else
                    if(res.data.article.likerList[i]!=myID){
                        recommend_page_main_search_bottom_like_span.className='notlike'
                    }
                }
            })  
            //获取评论并渲染评论
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            var articleId=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('the_article_id',articleId)
            var recommend_page_main_discussion_number_num=document.querySelector('#recommend_page_main_discussion_number_num')
            var recommend_page_main_discussion_nickname=document.querySelector('#recommend_page_main_discussion_nickname')
            var recommend_page_main_discussion_content=document.querySelector('#recommend_page_main_discussion_content')
            var recommend_page_main_discussion_like_number=document.querySelector('#recommend_page_main_discussion_like_number')
            var discussion_url='http://175.178.193.182:8080/review/byArticle'
            var discussion_Obj={
                articleId:articleId,
                pages:0
            }
            axios.get(discussion_url,{params:discussion_Obj}).then(function(res){
                console.log(res);
                recommend_page_main_discussion_number_num.innerHTML=res.data.reviews.length
                //一级评论
                for(let i=0;i<res.data.reviews.length;i++){
                    if(parseInt(res.data.reviews[i].authorId)!=parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }else
                    if(parseInt(res.data.reviews[i].authorId)===parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p><button id="delete_discussion_btn">删除</button></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }
                    recommend_page_main_discussion_div11.setAttribute('reviewId',res.data.reviews[i].reviewId);
                    recommend_page_main_discussion_div11.setAttribute('articleId',res.data.reviews[i].replyToArticleId);
                    recommend_page_main_discussion_div11.setAttribute('authorId',res.data.reviews[i].authorId);
                    var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                    var review_authorId=res.data.reviews[i].authorId
                    var baseInfo_obj={
                        userId:review_authorId
                    }
                    axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                        console.log(res);
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[0].src=res.data.user.avatar
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                    })
                    var like=recommend_page_main_discussion_div11.childNodes[0].childNodes[2].childNodes[0]
                    var j=0
                    if(res.data.reviews[i].likerList.length===0){
                        like.className='notlike'
                    }
                    for(j=0;j<res.data.reviews[i].likerList.length;j++){
                        if(res.data.reviews[i].likerList[j]===myID){
                            like.className='likeone'
                            break
                        }else
                        if(res.data.reviews[i].likerList[j]!=myID){
                            like.className='notlike'
                        }
                    }
                    //渲染二级评论
                    if(res.data.reviews[i].reviewList.length!=0){
                        for(let j=0;j<res.data.reviews[i].reviewList.length;j++){
                            var second_review_authorId=res.data.reviews[i].reviewList[j].authorId
                            var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                            var review_authorId=res.data.reviews[i].authorId
                            var baseInfo_obj={
                                userId:second_review_authorId
                            }
                            axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                                console.log(res);
                                console.log(recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[0]);
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[0].src=res.data.user.avatar
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                            })
                            if(parseInt(res.data.reviews[i].reviewList[j].authorId)===parseInt(myID)){
                                var second_discussion='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head1"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].reviewList[j].authorId+'</p><p id="recommend_page_main_discussion_content">'+res.data.reviews[i].reviewList[j].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like2"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].reviewList[j].likes+'</p><button id="delete_discussion_btn">删除</button></div></div>'
                                var second_discussion_div=document.createElement('div')
                                second_discussion_div.innerHTML=second_discussion
                                recommend_page_main_discussion_div11.appendChild(second_discussion_div)
                            }else
                            if(parseInt(res.data.reviews[i].reviewList[j].authorId)!=parseInt(myID)){
                                var second_discussion='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head1"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].reviewList[j].authorId+'</p><p id="recommend_page_main_discussion_content">'+res.data.reviews[i].reviewList[j].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like2"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].reviewList[j].likes+'</p></div></div>'
                                var second_discussion_div=document.createElement('div')
                                second_discussion_div.innerHTML=second_discussion
                                recommend_page_main_discussion_div11.appendChild(second_discussion_div)
                            }
                            second_discussion_div.setAttribute('reviewId',res.data.reviews[i].reviewList[j].reviewId)
                            var second_like=second_discussion_div.childNodes[0].childNodes[2].childNodes[0]
                            if(res.data.reviews[i].reviewList[j].likerList.length===0){
                                second_like.className='notlike'
                            }
                            var k=0
                            console.log(second_like);
                            console.log(res.data.reviews[i].reviewList[j].likerList.length);
                            for(k=0;k<res.data.reviews[i].reviewList[j].likerList.length;k++){
                                if(res.data.reviews[i].reviewList[j].likerList[k]===myID){
                                    second_like.className='likeone'
                                    break
                                }else
                                if(res.data.reviews[i].reviewList[j].likerList[k]!=myID){
                                    second_like.className='notlike'
                                }
                            }
                        }
                    }
                }
            })
            //获取文章用户信息渲染头像和昵称
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            var userobj={userId:userId}
            var userId_url='http://175.178.193.182:8080/user/fullInfo'
            axios.get(userId_url,{params:userobj}).then(function(res){
                console.log(res);
                recommend_page_main_head.src=res.data.user.avatar
                recommend_page_main_nickname.innerHTML=res.data.user.nickname
            })
            //获取用户个人的关注列表确认是否有关注该用户
            var myID=localStorage.getItem('myID')
            var myID_data={userId:myID}
            var myID_url='http://175.178.193.182:8080/user/followerList'
            axios.get(myID_url,{params:myID_data}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.followsList.length;i++){
                    if(res.data.followsList[i].userId==userId){
                        recommend_page_main_btn.innerHTML='已关注'
                        break
                    }else
                    if(res.data.followsList[i].userId!=userId){
                        recommend_page_main_btn.innerHTML='未关注'
                    }
                }
            })
            //点击头像进入
            recommend_page_main_head.addEventListener('click',function(){
                second.style.display='none'
                foot.style.display='none'
                var data_menu11=document.querySelector('#data_menu11')
                //渲染页面            
                var other_center_url='http://175.178.193.182:8080/user/fullInfo'
                var authorid=t.parentNode.parentNode.getAttribute('authorid')
                localStorage.setItem('otherid',authorid)
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var paramsObj={userId:authorid}
                axios.get(other_center_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var header_img1=document.querySelector('#header_img1')
                    var header_span1=document.querySelector('#header_span1')
                    header_img1.src=res.data.user.avatar
                    header_span1.innerHTML=res.data.user.nickname
                    var center_follow1=document.querySelector('#center_follow1')
                    var follow_page1=document.querySelector('#follow_page1')
                    var follow_page_main1=document.querySelector('#follow_page_main1')
                    var follow_number1=document.querySelector('#follow_number1')
                    var fans_number1=document.querySelector('#fans_number1')
                    var follow_url='http://175.178.193.182:8080/user/followerList'
                    var follow_params={userId:authorid}
                    axios.get(follow_url,{params:follow_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.followsList.length);
                        follow_number1.innerHTML=res.data.followsList.length
                    })
                    var fans_url='http://175.178.193.182:8080/user/fanList'
                    var fans_params={userId:authorid}
                    axios.get(fans_url,{params:fans_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.fansList.length);
                        fans_number1.innerHTML=res.data.fansList.length
                    })
                    var collection_number1=document.querySelector('#collection_number1')
                    var like_url='http://175.178.193.182:8080/article/getLike'
                    var like_params={userId:authorid}
                    axios.get(like_url,{params:like_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.likedArticles.length);
                        localStorage.setItem('like_number1',res.data.likedArticles.length)
                    })
                    var like_number1=localStorage.getItem('like_number1')
                    console.log(like_number1);
                    var star_url='http://175.178.193.182:8080/article/getStar'
                    var star_params={userId:authorid}
                    axios.get(star_url,{params:star_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.staredArticles.length);
                        localStorage.setItem('star_number1',res.data.staredArticles.length)
                    })
                    var star_number1=localStorage.getItem('star_number1')
                    console.log(star_number1);
                    var collection1=parseInt(like_number1)+parseInt(star_number1)
                    console.log(collection1);
                    collection_number1.innerHTML=collection1
                })
                var data_menu1_p1=document.querySelector('#data_menu1_p1')
                var data_menu2_p1=document.querySelector('#data_menu2_p1')
                var data_menu3_p1=document.querySelector('#data_menu3_p1')
                var note_part1=document.querySelector('#note_part1')
                var collection_part1=document.querySelector('#collection_part1')
                var liked_part1=document.querySelector('#liked_part1')
                var note_part_left1=document.querySelector('#note_part_left1')
                var note_part_right1=document.querySelector('#note_part_right1')
                var collection_part_left1=document.querySelector('#collection_part_left1')
                var collection_part_right1=document.querySelector('#collection_part_right1')
                var liked_part_left1=document.querySelector('#liked_part_left1')
                var liked_part_right1=document.querySelector('#liked_part_right1')
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                note_part_left1.innerHTML=""
                note_part_right1.innerHTML=""
                var main_url='http://175.178.193.182:8080/article/byAuthor'
                var paramsObj={authorId:otherid}
                axios.get(main_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.articles.length;i++){
                        var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                        var recommend_page_left_11=document.createElement('div')
                        recommend_page_left_11.innerHTML = recommend_page_left_0;
                        if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                            note_part_right1.appendChild(recommend_page_left_11)
                        }else
                        if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                            note_part_left1.appendChild(recommend_page_left_11)
                        }
                    }
                })
                collection_part_left1.innerHTML=""
                collection_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:otherid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.staredArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                            collection_part_left1.appendChild(liked_part_11)
                        }else
                        if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                            collection_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })
                liked_part_left1.innerHTML=""
                liked_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:otherid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.likedArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                            liked_part_left1.appendChild(liked_part_11)
                        }else
                        if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                            liked_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })
            })
            //获取评论人数
            var myIDobj={userId:myID}
            var recommend_page_main_search_bottom_discuss_number=document.querySelector('#recommend_page_main_search_bottom_discuss_number')
            var discuss_url='http://175.178.193.182:8080/notice/comment'
            axios.get(discuss_url,{params:myIDobj}).then(function(res){
                console.log(res);
                recommend_page_main_search_bottom_discuss_number.innerHTML=res.data.like.length
            })
        } 
        //进入个人页面
        if(t.id==='recommend_page_head'){
            var other_center=document.querySelector('#other_center')
            other_center.style.display='block'
            second.style.display='none'
            foot.style.display='none'
            var data_menu11=document.querySelector('#data_menu11')
            //渲染页面            
            var other_center_url='http://175.178.193.182:8080/user/fullInfo'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            localStorage.setItem('otherid',authorid)
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var paramsObj={userId:authorid}
            axios.get(other_center_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var header_img1=document.querySelector('#header_img1')
                var header_span1=document.querySelector('#header_span1')
                header_img1.src=res.data.user.avatar
                header_span1.innerHTML=res.data.user.nickname
                var center_follow1=document.querySelector('#center_follow1')
                var follow_page1=document.querySelector('#follow_page1')
                var follow_page_main1=document.querySelector('#follow_page_main1')
                var follow_number1=document.querySelector('#follow_number1')
                var fans_number1=document.querySelector('#fans_number1')
                var follow_url='http://175.178.193.182:8080/user/followerList'
                var follow_params={userId:authorid}
                axios.get(follow_url,{params:follow_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.followsList.length);
                    follow_number1.innerHTML=res.data.followsList.length
                })
                var fans_url='http://175.178.193.182:8080/user/fanList'
                var fans_params={userId:authorid}
                axios.get(fans_url,{params:fans_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.fansList.length);
                    fans_number1.innerHTML=res.data.fansList.length
                })
                var collection_number1=document.querySelector('#collection_number1')
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:authorid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.likedArticles.length);
                    localStorage.setItem('like_number1',res.data.likedArticles.length)
                })
                var like_number1=localStorage.getItem('like_number1')
                console.log(like_number1);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:authorid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.staredArticles.length);
                    localStorage.setItem('star_number1',res.data.staredArticles.length)
                })
                var star_number1=localStorage.getItem('star_number1')
                console.log(star_number1);
                var collection1=parseInt(like_number1)+parseInt(star_number1)
                console.log(collection1);
                collection_number1.innerHTML=collection1
            })
            var data_menu1_p1=document.querySelector('#data_menu1_p1')
            var data_menu2_p1=document.querySelector('#data_menu2_p1')
            var data_menu3_p1=document.querySelector('#data_menu3_p1')
            var note_part1=document.querySelector('#note_part1')
            var collection_part1=document.querySelector('#collection_part1')
            var liked_part1=document.querySelector('#liked_part1')
            var note_part_left1=document.querySelector('#note_part_left1')
            var note_part_right1=document.querySelector('#note_part_right1')
            var collection_part_left1=document.querySelector('#collection_part_left1')
            var collection_part_right1=document.querySelector('#collection_part_right1')
            var liked_part_left1=document.querySelector('#liked_part_left1')
            var liked_part_right1=document.querySelector('#liked_part_right1')
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            note_part_left1.innerHTML=""
            note_part_right1.innerHTML=""
            var main_url='http://175.178.193.182:8080/article/byAuthor'
            var paramsObj={authorId:otherid}
            axios.get(main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.articles.length;i++){
                    var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                    var recommend_page_left_11=document.createElement('div')
                    recommend_page_left_11.innerHTML = recommend_page_left_0;
                    if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                        note_part_right1.appendChild(recommend_page_left_11)
                    }else
                    if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                        note_part_left1.appendChild(recommend_page_left_11)
                    }
                }
            })
            collection_part_left1.innerHTML=""
            collection_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var star_url='http://175.178.193.182:8080/article/getStar'
            var star_params={userId:otherid}
            axios.get(star_url,{params:star_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.staredArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                        collection_part_left1.appendChild(liked_part_11)
                    }else
                    if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                        collection_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
            liked_part_left1.innerHTML=""
            liked_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var like_url='http://175.178.193.182:8080/article/getLike'
            var like_params={userId:otherid}
            axios.get(like_url,{params:like_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.likedArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                        liked_part_left1.appendChild(liked_part_11)
                    }else
                    if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                        liked_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
        }
    })
    //点击美妆文章图片或标题进入详情页面
    beauty_page.addEventListener('click',function(e){
        let t=e.target
        console.log(t);
        if(t.id==='recommend_page_left_p1'||t.id==='recommend_page_head_top'){
            recommend_page_main.style.display='block'
            second.style.display='none'
            foot.style.display='none'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            var articleid=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('articleid',articleid)
            localStorage.setItem('authorid',authorid)
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_head=document.querySelector('#recommend_page_main_head')
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_btn=document.querySelector('#recommend_page_main_btn')
            var recommend_page_main_picture_li=document.querySelector('#recommend_page_main_picture_li')
            var recommend_page_main_picture_li_img=document.querySelector('#recommend_page_main_picture_li_img')
            var recommend_page_main_picture_ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_title=document.querySelector('#recommend_page_main_title')
            var recommend_page_main_title_p=document.querySelector('#recommend_page_main_title_p')
            var recommend_page_main_content_p=document.querySelector('#recommend_page_main_content_p')
            var recommend_page_main_tag_span2=document.querySelector('#recommend_page_main_tag_span2')
            var recommend_page_main_bottom_span1=document.querySelector('#recommend_page_main_bottom_span1')
            var recommend_page_main_bottom_span2=document.querySelector('#recommend_page_main_bottom_span2')
            var ol=document.querySelector('#circle')
            var ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_picture=document.querySelector('#recommend_page_main_picture')
            //渲染详情页面            
            var recommend_page_main_url='http://175.178.193.182:8080/article/byId'
            var articleId=t.parentNode.parentNode.getAttribute('articleId')
            var paramsObj={articleId:articleId}
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0
                for(i=0;i<res.data.article.images.length;i++){
                    var recommend_page_main_picture_li='<img src="./picture/login_bg1.jpg" alt="" id="recommend_page_main_picture_li_img">'
                    var recommend_page_main_picture_li1=document.createElement('li')
                    recommend_page_main_picture_li1.innerHTML=recommend_page_main_picture_li
                    recommend_page_main_picture_ul.appendChild(recommend_page_main_picture_li1)
                    recommend_page_main_picture_li1.childNodes[0].src=res.data.article.images[i];
                    recommend_page_main_title_p.innerHTML=res.data.article.title
                    recommend_page_main_content_p.innerHTML=res.data.article.content
                    recommend_page_main_tag_span2.innerHTML=res.data.article.tags
                    recommend_page_main_bottom_span1.innerHTML=res.data.article.postDate
                    var li=document.createElement('li');
                    li.setAttribute('index',i);
                    ol.appendChild(li);
                    ol.children[0].className='current';
                }
            })
            //获取收藏人数
            var recommend_page_main_search_bottom_collection_number=document.querySelector('#recommend_page_main_search_bottom_collection_number')
            var recommend_page_main_search_bottom_collection_span=document.querySelector('#recommend_page_main_search_bottom_collection_span')
            var recommend_page_main_search_bottom_like_span=document.querySelector('#recommend_page_main_search_bottom_like_span')
            var recommend_page_main_search_bottom_like_number=document.querySelector('#recommend_page_main_search_bottom_like_number')
            var myID=localStorage.getItem('myID')
            console.log(myID);
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                recommend_page_main_search_bottom_collection_number.innerHTML=res.data.article.starerList.length
                var i=0
                for(i=0;i<res.data.article.starerList.length;i++){
                    if(res.data.article.starerList[i]===myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click1'
                    }else
                    if(res.data.article.starerList[i]!=myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click2'
                    }
                }
                //获取点赞人数
                recommend_page_main_search_bottom_like_number.innerHTML=res.data.article.likerList.length
                if(res.data.article.likerList.length==0){
                    recommend_page_main_search_bottom_like_span.className='notlike'
                }
                for(i=0;i<res.data.article.likerList.length;i++){
                    //console.log(res.data.article.likerList[i]);
                    if(res.data.article.likerList[i]===myID){
                        recommend_page_main_search_bottom_like_span.className='likeone'
                        break
                    }else
                    if(res.data.article.likerList[i]!=myID){
                        recommend_page_main_search_bottom_like_span.className='notlike'
                    }
                }
            })  
            //获取评论并渲染评论
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            var articleId=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('the_article_id',articleId)
            var recommend_page_main_discussion_number_num=document.querySelector('#recommend_page_main_discussion_number_num')
            var recommend_page_main_discussion_nickname=document.querySelector('#recommend_page_main_discussion_nickname')
            var recommend_page_main_discussion_content=document.querySelector('#recommend_page_main_discussion_content')
            var recommend_page_main_discussion_like_number=document.querySelector('#recommend_page_main_discussion_like_number')
            var discussion_url='http://175.178.193.182:8080/review/byArticle'
            var discussion_Obj={
                articleId:articleId,
                pages:0
            }
            axios.get(discussion_url,{params:discussion_Obj}).then(function(res){
                console.log(res);
                recommend_page_main_discussion_number_num.innerHTML=res.data.reviews.length
                //一级评论
                for(let i=0;i<res.data.reviews.length;i++){
                    if(parseInt(res.data.reviews[i].authorId)!=parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }else
                    if(parseInt(res.data.reviews[i].authorId)===parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p><button id="delete_discussion_btn">删除</button></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }
                    recommend_page_main_discussion_div11.setAttribute('reviewId',res.data.reviews[i].reviewId);
                    recommend_page_main_discussion_div11.setAttribute('articleId',res.data.reviews[i].replyToArticleId);
                    recommend_page_main_discussion_div11.setAttribute('authorId',res.data.reviews[i].authorId);
                    var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                    var review_authorId=res.data.reviews[i].authorId
                    var baseInfo_obj={
                        userId:review_authorId
                    }
                    axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                        console.log(res);
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[0].src=res.data.user.avatar
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                    })
                    var like=recommend_page_main_discussion_div11.childNodes[0].childNodes[2].childNodes[0]
                    var j=0
                    if(res.data.reviews[i].likerList.length===0){
                        like.className='notlike'
                    }
                    for(j=0;j<res.data.reviews[i].likerList.length;j++){
                        if(res.data.reviews[i].likerList[j]===myID){
                            like.className='likeone'
                            break
                        }else
                        if(res.data.reviews[i].likerList[j]!=myID){
                            like.className='notlike'
                        }
                    }
                    //渲染二级评论
                    if(res.data.reviews[i].reviewList.length!=0){
                        for(let j=0;j<res.data.reviews[i].reviewList.length;j++){
                            var second_review_authorId=res.data.reviews[i].reviewList[j].authorId
                            var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                            var review_authorId=res.data.reviews[i].authorId
                            var baseInfo_obj={
                                userId:second_review_authorId
                            }
                            axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                                console.log(res);
                                console.log(recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[0]);
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[0].src=res.data.user.avatar
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                            })
                            if(parseInt(res.data.reviews[i].reviewList[j].authorId)===parseInt(myID)){
                                var second_discussion='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head1"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].reviewList[j].authorId+'</p><p id="recommend_page_main_discussion_content">'+res.data.reviews[i].reviewList[j].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like2"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].reviewList[j].likes+'</p><button id="delete_discussion_btn">删除</button></div></div>'
                                var second_discussion_div=document.createElement('div')
                                second_discussion_div.innerHTML=second_discussion
                                recommend_page_main_discussion_div11.appendChild(second_discussion_div)
                            }else
                            if(parseInt(res.data.reviews[i].reviewList[j].authorId)!=parseInt(myID)){
                                var second_discussion='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head1"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].reviewList[j].authorId+'</p><p id="recommend_page_main_discussion_content">'+res.data.reviews[i].reviewList[j].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like2"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].reviewList[j].likes+'</p></div></div>'
                                var second_discussion_div=document.createElement('div')
                                second_discussion_div.innerHTML=second_discussion
                                recommend_page_main_discussion_div11.appendChild(second_discussion_div)
                            }
                            second_discussion_div.setAttribute('reviewId',res.data.reviews[i].reviewList[j].reviewId)
                            var second_like=second_discussion_div.childNodes[0].childNodes[2].childNodes[0]
                            if(res.data.reviews[i].reviewList[j].likerList.length===0){
                                second_like.className='notlike'
                            }
                            var k=0
                            console.log(second_like);
                            console.log(res.data.reviews[i].reviewList[j].likerList.length);
                            for(k=0;k<res.data.reviews[i].reviewList[j].likerList.length;k++){
                                if(res.data.reviews[i].reviewList[j].likerList[k]===myID){
                                    second_like.className='likeone'
                                    break
                                }else
                                if(res.data.reviews[i].reviewList[j].likerList[k]!=myID){
                                    second_like.className='notlike'
                                }
                            }
                        }
                    }
                }
            })
            //获取文章用户信息渲染头像和昵称
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            var userobj={userId:userId}
            var userId_url='http://175.178.193.182:8080/user/fullInfo'
            axios.get(userId_url,{params:userobj}).then(function(res){
                console.log(res);
                recommend_page_main_head.src=res.data.user.avatar
                recommend_page_main_nickname.innerHTML=res.data.user.nickname
            })
            //获取用户个人的关注列表确认是否有关注该用户
            var myID=localStorage.getItem('myID')
            var myID_data={userId:myID}
            var myID_url='http://175.178.193.182:8080/user/followerList'
            axios.get(myID_url,{params:myID_data}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.followsList.length;i++){
                    if(res.data.followsList[i].userId==userId){
                        recommend_page_main_btn.innerHTML='已关注'
                        break
                    }else
                    if(res.data.followsList[i].userId!=userId){
                        recommend_page_main_btn.innerHTML='未关注'
                    }
                }
            })
            //点击头像进入
            recommend_page_main_head.addEventListener('click',function(){
                second.style.display='none'
                foot.style.display='none'
                var data_menu11=document.querySelector('#data_menu11')
                //渲染页面            
                var other_center_url='http://175.178.193.182:8080/user/fullInfo'
                var authorid=t.parentNode.parentNode.getAttribute('authorid')
                localStorage.setItem('otherid',authorid)
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var paramsObj={userId:authorid}
                axios.get(other_center_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var header_img1=document.querySelector('#header_img1')
                    var header_span1=document.querySelector('#header_span1')
                    header_img1.src=res.data.user.avatar
                    header_span1.innerHTML=res.data.user.nickname
                    var center_follow1=document.querySelector('#center_follow1')
                    var follow_page1=document.querySelector('#follow_page1')
                    var follow_page_main1=document.querySelector('#follow_page_main1')
                    var follow_number1=document.querySelector('#follow_number1')
                    var fans_number1=document.querySelector('#fans_number1')
                    var follow_url='http://175.178.193.182:8080/user/followerList'
                    var follow_params={userId:authorid}
                    axios.get(follow_url,{params:follow_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.followsList.length);
                        follow_number1.innerHTML=res.data.followsList.length
                    })
                    var fans_url='http://175.178.193.182:8080/user/fanList'
                    var fans_params={userId:authorid}
                    axios.get(fans_url,{params:fans_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.fansList.length);
                        fans_number1.innerHTML=res.data.fansList.length
                    })
                    var collection_number1=document.querySelector('#collection_number1')
                    var like_url='http://175.178.193.182:8080/article/getLike'
                    var like_params={userId:authorid}
                    axios.get(like_url,{params:like_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.likedArticles.length);
                        localStorage.setItem('like_number1',res.data.likedArticles.length)
                    })
                    var like_number1=localStorage.getItem('like_number1')
                    console.log(like_number1);
                    var star_url='http://175.178.193.182:8080/article/getStar'
                    var star_params={userId:authorid}
                    axios.get(star_url,{params:star_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.staredArticles.length);
                        localStorage.setItem('star_number1',res.data.staredArticles.length)
                    })
                    var star_number1=localStorage.getItem('star_number1')
                    console.log(star_number1);
                    var collection1=parseInt(like_number1)+parseInt(star_number1)
                    console.log(collection1);
                    collection_number1.innerHTML=collection1
                })
                var data_menu1_p1=document.querySelector('#data_menu1_p1')
                var data_menu2_p1=document.querySelector('#data_menu2_p1')
                var data_menu3_p1=document.querySelector('#data_menu3_p1')
                var note_part1=document.querySelector('#note_part1')
                var collection_part1=document.querySelector('#collection_part1')
                var liked_part1=document.querySelector('#liked_part1')
                var note_part_left1=document.querySelector('#note_part_left1')
                var note_part_right1=document.querySelector('#note_part_right1')
                var collection_part_left1=document.querySelector('#collection_part_left1')
                var collection_part_right1=document.querySelector('#collection_part_right1')
                var liked_part_left1=document.querySelector('#liked_part_left1')
                var liked_part_right1=document.querySelector('#liked_part_right1')
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                note_part_left1.innerHTML=""
                note_part_right1.innerHTML=""
                var main_url='http://175.178.193.182:8080/article/byAuthor'
                var paramsObj={authorId:otherid}
                axios.get(main_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.articles.length;i++){
                        var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                        var recommend_page_left_11=document.createElement('div')
                        recommend_page_left_11.innerHTML = recommend_page_left_0;
                        if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                            note_part_right1.appendChild(recommend_page_left_11)
                        }else
                        if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                            note_part_left1.appendChild(recommend_page_left_11)
                        }
                    }
                })
                collection_part_left1.innerHTML=""
                collection_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:otherid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.staredArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                            collection_part_left1.appendChild(liked_part_11)
                        }else
                        if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                            collection_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })
                liked_part_left1.innerHTML=""
                liked_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:otherid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.likedArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                            liked_part_left1.appendChild(liked_part_11)
                        }else
                        if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                            liked_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })
            })
            //获取评论人数
            var myIDobj={userId:myID}
            var recommend_page_main_search_bottom_discuss_number=document.querySelector('#recommend_page_main_search_bottom_discuss_number')
            var discuss_url='http://175.178.193.182:8080/notice/comment'
            axios.get(discuss_url,{params:myIDobj}).then(function(res){
                console.log(res);
                recommend_page_main_search_bottom_discuss_number.innerHTML=res.data.like.length
            })
        } 
        //进入个人页面
        if(t.id==='recommend_page_head'){
            var other_center=document.querySelector('#other_center')
            other_center.style.display='block'
            second.style.display='none'
            foot.style.display='none'
            var data_menu11=document.querySelector('#data_menu11')
            //渲染页面            
            var other_center_url='http://175.178.193.182:8080/user/fullInfo'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            localStorage.setItem('otherid',authorid)
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var paramsObj={userId:authorid}
            axios.get(other_center_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var header_img1=document.querySelector('#header_img1')
                var header_span1=document.querySelector('#header_span1')
                header_img1.src=res.data.user.avatar
                header_span1.innerHTML=res.data.user.nickname
                var center_follow1=document.querySelector('#center_follow1')
                var follow_page1=document.querySelector('#follow_page1')
                var follow_page_main1=document.querySelector('#follow_page_main1')
                var follow_number1=document.querySelector('#follow_number1')
                var fans_number1=document.querySelector('#fans_number1')
                var follow_url='http://175.178.193.182:8080/user/followerList'
                var follow_params={userId:authorid}
                axios.get(follow_url,{params:follow_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.followsList.length);
                    follow_number1.innerHTML=res.data.followsList.length
                })
                var fans_url='http://175.178.193.182:8080/user/fanList'
                var fans_params={userId:authorid}
                axios.get(fans_url,{params:fans_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.fansList.length);
                    fans_number1.innerHTML=res.data.fansList.length
                })
                var collection_number1=document.querySelector('#collection_number1')
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:authorid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.likedArticles.length);
                    localStorage.setItem('like_number1',res.data.likedArticles.length)
                })
                var like_number1=localStorage.getItem('like_number1')
                console.log(like_number1);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:authorid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.staredArticles.length);
                    localStorage.setItem('star_number1',res.data.staredArticles.length)
                })
                var star_number1=localStorage.getItem('star_number1')
                console.log(star_number1);
                var collection1=parseInt(like_number1)+parseInt(star_number1)
                console.log(collection1);
                collection_number1.innerHTML=collection1
            })
            var data_menu1_p1=document.querySelector('#data_menu1_p1')
            var data_menu2_p1=document.querySelector('#data_menu2_p1')
            var data_menu3_p1=document.querySelector('#data_menu3_p1')
            var note_part1=document.querySelector('#note_part1')
            var collection_part1=document.querySelector('#collection_part1')
            var liked_part1=document.querySelector('#liked_part1')
            var note_part_left1=document.querySelector('#note_part_left1')
            var note_part_right1=document.querySelector('#note_part_right1')
            var collection_part_left1=document.querySelector('#collection_part_left1')
            var collection_part_right1=document.querySelector('#collection_part_right1')
            var liked_part_left1=document.querySelector('#liked_part_left1')
            var liked_part_right1=document.querySelector('#liked_part_right1')
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            note_part_left1.innerHTML=""
            note_part_right1.innerHTML=""
            var main_url='http://175.178.193.182:8080/article/byAuthor'
            var paramsObj={authorId:otherid}
            axios.get(main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.articles.length;i++){
                    var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                    var recommend_page_left_11=document.createElement('div')
                    recommend_page_left_11.innerHTML = recommend_page_left_0;
                    if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                        note_part_right1.appendChild(recommend_page_left_11)
                    }else
                    if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                        note_part_left1.appendChild(recommend_page_left_11)
                    }
                }
            })
            collection_part_left1.innerHTML=""
            collection_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var star_url='http://175.178.193.182:8080/article/getStar'
            var star_params={userId:otherid}
            axios.get(star_url,{params:star_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.staredArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                        collection_part_left1.appendChild(liked_part_11)
                    }else
                    if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                        collection_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
            liked_part_left1.innerHTML=""
            liked_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var like_url='http://175.178.193.182:8080/article/getLike'
            var like_params={userId:otherid}
            axios.get(like_url,{params:like_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.likedArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                        liked_part_left1.appendChild(liked_part_11)
                    }else
                    if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                        liked_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
        }
    })
    //点击护肤文章图片或标题进入详情页面
    skin_page.addEventListener('click',function(e){
        let t=e.target
        console.log(t);
        if(t.id==='recommend_page_left_p1'||t.id==='recommend_page_head_top'){
            recommend_page_main.style.display='block'
            second.style.display='none'
            foot.style.display='none'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            var articleid=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('articleid',articleid)
            localStorage.setItem('authorid',authorid)
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_head=document.querySelector('#recommend_page_main_head')
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_btn=document.querySelector('#recommend_page_main_btn')
            var recommend_page_main_picture_li=document.querySelector('#recommend_page_main_picture_li')
            var recommend_page_main_picture_li_img=document.querySelector('#recommend_page_main_picture_li_img')
            var recommend_page_main_picture_ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_title=document.querySelector('#recommend_page_main_title')
            var recommend_page_main_title_p=document.querySelector('#recommend_page_main_title_p')
            var recommend_page_main_content_p=document.querySelector('#recommend_page_main_content_p')
            var recommend_page_main_tag_span2=document.querySelector('#recommend_page_main_tag_span2')
            var recommend_page_main_bottom_span1=document.querySelector('#recommend_page_main_bottom_span1')
            var recommend_page_main_bottom_span2=document.querySelector('#recommend_page_main_bottom_span2')
            var ol=document.querySelector('#circle')
            var ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_picture=document.querySelector('#recommend_page_main_picture')
            //渲染详情页面            
            var recommend_page_main_url='http://175.178.193.182:8080/article/byId'
            var articleId=t.parentNode.parentNode.getAttribute('articleId')
            var paramsObj={articleId:articleId}
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0
                for(i=0;i<res.data.article.images.length;i++){
                    var recommend_page_main_picture_li='<img src="./picture/login_bg1.jpg" alt="" id="recommend_page_main_picture_li_img">'
                    var recommend_page_main_picture_li1=document.createElement('li')
                    recommend_page_main_picture_li1.innerHTML=recommend_page_main_picture_li
                    recommend_page_main_picture_ul.appendChild(recommend_page_main_picture_li1)
                    recommend_page_main_picture_li1.childNodes[0].src=res.data.article.images[i];
                    recommend_page_main_title_p.innerHTML=res.data.article.title
                    recommend_page_main_content_p.innerHTML=res.data.article.content
                    recommend_page_main_tag_span2.innerHTML=res.data.article.tags
                    recommend_page_main_bottom_span1.innerHTML=res.data.article.postDate
                    var li=document.createElement('li');
                    li.setAttribute('index',i);
                    ol.appendChild(li);
                    ol.children[0].className='current';
                }
            })
            //获取收藏人数
            var recommend_page_main_search_bottom_collection_number=document.querySelector('#recommend_page_main_search_bottom_collection_number')
            var recommend_page_main_search_bottom_collection_span=document.querySelector('#recommend_page_main_search_bottom_collection_span')
            var recommend_page_main_search_bottom_like_span=document.querySelector('#recommend_page_main_search_bottom_like_span')
            var recommend_page_main_search_bottom_like_number=document.querySelector('#recommend_page_main_search_bottom_like_number')
            var myID=localStorage.getItem('myID')
            console.log(myID);
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                recommend_page_main_search_bottom_collection_number.innerHTML=res.data.article.starerList.length
                var i=0
                for(i=0;i<res.data.article.starerList.length;i++){
                    if(res.data.article.starerList[i]===myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click1'
                    }else
                    if(res.data.article.starerList[i]!=myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click2'
                    }
                }
                //获取点赞人数
                recommend_page_main_search_bottom_like_number.innerHTML=res.data.article.likerList.length
                if(res.data.article.likerList.length==0){
                    recommend_page_main_search_bottom_like_span.className='notlike'
                }
                for(i=0;i<res.data.article.likerList.length;i++){
                    //console.log(res.data.article.likerList[i]);
                    if(res.data.article.likerList[i]===myID){
                        recommend_page_main_search_bottom_like_span.className='likeone'
                        break
                    }else
                    if(res.data.article.likerList[i]!=myID){
                        recommend_page_main_search_bottom_like_span.className='notlike'
                    }
                }
            })  
            //获取评论并渲染评论
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            var articleId=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('the_article_id',articleId)
            var recommend_page_main_discussion_number_num=document.querySelector('#recommend_page_main_discussion_number_num')
            var recommend_page_main_discussion_nickname=document.querySelector('#recommend_page_main_discussion_nickname')
            var recommend_page_main_discussion_content=document.querySelector('#recommend_page_main_discussion_content')
            var recommend_page_main_discussion_like_number=document.querySelector('#recommend_page_main_discussion_like_number')
            var discussion_url='http://175.178.193.182:8080/review/byArticle'
            var discussion_Obj={
                articleId:articleId,
                pages:0
            }
            axios.get(discussion_url,{params:discussion_Obj}).then(function(res){
                console.log(res);
                recommend_page_main_discussion_number_num.innerHTML=res.data.reviews.length
                //一级评论
                for(let i=0;i<res.data.reviews.length;i++){
                    if(parseInt(res.data.reviews[i].authorId)!=parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }else
                    if(parseInt(res.data.reviews[i].authorId)===parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p><button id="delete_discussion_btn">删除</button></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }
                    recommend_page_main_discussion_div11.setAttribute('reviewId',res.data.reviews[i].reviewId);
                    recommend_page_main_discussion_div11.setAttribute('articleId',res.data.reviews[i].replyToArticleId);
                    recommend_page_main_discussion_div11.setAttribute('authorId',res.data.reviews[i].authorId);
                    var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                    var review_authorId=res.data.reviews[i].authorId
                    var baseInfo_obj={
                        userId:review_authorId
                    }
                    axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                        console.log(res);
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[0].src=res.data.user.avatar
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                    })
                    var like=recommend_page_main_discussion_div11.childNodes[0].childNodes[2].childNodes[0]
                    var j=0
                    if(res.data.reviews[i].likerList.length===0){
                        like.className='notlike'
                    }
                    for(j=0;j<res.data.reviews[i].likerList.length;j++){
                        if(res.data.reviews[i].likerList[j]===myID){
                            like.className='likeone'
                            break
                        }else
                        if(res.data.reviews[i].likerList[j]!=myID){
                            like.className='notlike'
                        }
                    }
                    //渲染二级评论
                    if(res.data.reviews[i].reviewList.length!=0){
                        for(let j=0;j<res.data.reviews[i].reviewList.length;j++){
                            var second_review_authorId=res.data.reviews[i].reviewList[j].authorId
                            var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                            var review_authorId=res.data.reviews[i].authorId
                            var baseInfo_obj={
                                userId:second_review_authorId
                            }
                            axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                                console.log(res);
                                console.log(recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[0]);
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[0].src=res.data.user.avatar
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                            })
                            if(parseInt(res.data.reviews[i].reviewList[j].authorId)===parseInt(myID)){
                                var second_discussion='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head1"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].reviewList[j].authorId+'</p><p id="recommend_page_main_discussion_content">'+res.data.reviews[i].reviewList[j].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like2"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].reviewList[j].likes+'</p><button id="delete_discussion_btn">删除</button></div></div>'
                                var second_discussion_div=document.createElement('div')
                                second_discussion_div.innerHTML=second_discussion
                                recommend_page_main_discussion_div11.appendChild(second_discussion_div)
                            }else
                            if(parseInt(res.data.reviews[i].reviewList[j].authorId)!=parseInt(myID)){
                                var second_discussion='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head1"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].reviewList[j].authorId+'</p><p id="recommend_page_main_discussion_content">'+res.data.reviews[i].reviewList[j].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like2"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].reviewList[j].likes+'</p></div></div>'
                                var second_discussion_div=document.createElement('div')
                                second_discussion_div.innerHTML=second_discussion
                                recommend_page_main_discussion_div11.appendChild(second_discussion_div)
                            }
                            second_discussion_div.setAttribute('reviewId',res.data.reviews[i].reviewList[j].reviewId)
                            var second_like=second_discussion_div.childNodes[0].childNodes[2].childNodes[0]
                            if(res.data.reviews[i].reviewList[j].likerList.length===0){
                                second_like.className='notlike'
                            }
                            var k=0
                            console.log(second_like);
                            console.log(res.data.reviews[i].reviewList[j].likerList.length);
                            for(k=0;k<res.data.reviews[i].reviewList[j].likerList.length;k++){
                                if(res.data.reviews[i].reviewList[j].likerList[k]===myID){
                                    second_like.className='likeone'
                                    break
                                }else
                                if(res.data.reviews[i].reviewList[j].likerList[k]!=myID){
                                    second_like.className='notlike'
                                }
                            }
                        }
                    }
                }
            })
            //获取文章用户信息渲染头像和昵称
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            var userobj={userId:userId}
            var userId_url='http://175.178.193.182:8080/user/fullInfo'
            axios.get(userId_url,{params:userobj}).then(function(res){
                console.log(res);
                recommend_page_main_head.src=res.data.user.avatar
                recommend_page_main_nickname.innerHTML=res.data.user.nickname
            })
            //获取用户个人的关注列表确认是否有关注该用户
            var myID=localStorage.getItem('myID')
            var myID_data={userId:myID}
            var myID_url='http://175.178.193.182:8080/user/followerList'
            axios.get(myID_url,{params:myID_data}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.followsList.length;i++){
                    if(res.data.followsList[i].userId==userId){
                        recommend_page_main_btn.innerHTML='已关注'
                        break
                    }else
                    if(res.data.followsList[i].userId!=userId){
                        recommend_page_main_btn.innerHTML='未关注'
                    }
                }
            })
            //点击头像进入
            recommend_page_main_head.addEventListener('click',function(){
                second.style.display='none'
                foot.style.display='none'
                var data_menu11=document.querySelector('#data_menu11')
                //渲染页面            
                var other_center_url='http://175.178.193.182:8080/user/fullInfo'
                var authorid=t.parentNode.parentNode.getAttribute('authorid')
                localStorage.setItem('otherid',authorid)
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var paramsObj={userId:authorid}
                axios.get(other_center_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var header_img1=document.querySelector('#header_img1')
                    var header_span1=document.querySelector('#header_span1')
                    header_img1.src=res.data.user.avatar
                    header_span1.innerHTML=res.data.user.nickname
                    var center_follow1=document.querySelector('#center_follow1')
                    var follow_page1=document.querySelector('#follow_page1')
                    var follow_page_main1=document.querySelector('#follow_page_main1')
                    var follow_number1=document.querySelector('#follow_number1')
                    var fans_number1=document.querySelector('#fans_number1')
                    var follow_url='http://175.178.193.182:8080/user/followerList'
                    var follow_params={userId:authorid}
                    axios.get(follow_url,{params:follow_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.followsList.length);
                        follow_number1.innerHTML=res.data.followsList.length
                    })
                    var fans_url='http://175.178.193.182:8080/user/fanList'
                    var fans_params={userId:authorid}
                    axios.get(fans_url,{params:fans_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.fansList.length);
                        fans_number1.innerHTML=res.data.fansList.length
                    })
                    var collection_number1=document.querySelector('#collection_number1')
                    var like_url='http://175.178.193.182:8080/article/getLike'
                    var like_params={userId:authorid}
                    axios.get(like_url,{params:like_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.likedArticles.length);
                        localStorage.setItem('like_number1',res.data.likedArticles.length)
                    })
                    var like_number1=localStorage.getItem('like_number1')
                    console.log(like_number1);
                    var star_url='http://175.178.193.182:8080/article/getStar'
                    var star_params={userId:authorid}
                    axios.get(star_url,{params:star_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.staredArticles.length);
                        localStorage.setItem('star_number1',res.data.staredArticles.length)
                    })
                    var star_number1=localStorage.getItem('star_number1')
                    console.log(star_number1);
                    var collection1=parseInt(like_number1)+parseInt(star_number1)
                    console.log(collection1);
                    collection_number1.innerHTML=collection1
                })
                var data_menu1_p1=document.querySelector('#data_menu1_p1')
                var data_menu2_p1=document.querySelector('#data_menu2_p1')
                var data_menu3_p1=document.querySelector('#data_menu3_p1')
                var note_part1=document.querySelector('#note_part1')
                var collection_part1=document.querySelector('#collection_part1')
                var liked_part1=document.querySelector('#liked_part1')
                var note_part_left1=document.querySelector('#note_part_left1')
                var note_part_right1=document.querySelector('#note_part_right1')
                var collection_part_left1=document.querySelector('#collection_part_left1')
                var collection_part_right1=document.querySelector('#collection_part_right1')
                var liked_part_left1=document.querySelector('#liked_part_left1')
                var liked_part_right1=document.querySelector('#liked_part_right1')
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                note_part_left1.innerHTML=""
                note_part_right1.innerHTML=""
                var main_url='http://175.178.193.182:8080/article/byAuthor'
                var paramsObj={authorId:otherid}
                axios.get(main_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.articles.length;i++){
                        var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                        var recommend_page_left_11=document.createElement('div')
                        recommend_page_left_11.innerHTML = recommend_page_left_0;
                        if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                            note_part_right1.appendChild(recommend_page_left_11)
                        }else
                        if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                            note_part_left1.appendChild(recommend_page_left_11)
                        }
                    }
                })
                collection_part_left1.innerHTML=""
                collection_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:otherid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.staredArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                            collection_part_left1.appendChild(liked_part_11)
                        }else
                        if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                            collection_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })
                liked_part_left1.innerHTML=""
                liked_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:otherid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.likedArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                            liked_part_left1.appendChild(liked_part_11)
                        }else
                        if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                            liked_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })
            })
            //获取评论人数
            var myIDobj={userId:myID}
            var recommend_page_main_search_bottom_discuss_number=document.querySelector('#recommend_page_main_search_bottom_discuss_number')
            var discuss_url='http://175.178.193.182:8080/notice/comment'
            axios.get(discuss_url,{params:myIDobj}).then(function(res){
                console.log(res);
                recommend_page_main_search_bottom_discuss_number.innerHTML=res.data.like.length
            })
        } 
        //进入个人页面
        if(t.id==='recommend_page_head'){
            var other_center=document.querySelector('#other_center')
            other_center.style.display='block'
            second.style.display='none'
            foot.style.display='none'
            var data_menu11=document.querySelector('#data_menu11')
            //渲染页面            
            var other_center_url='http://175.178.193.182:8080/user/fullInfo'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            localStorage.setItem('otherid',authorid)
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var paramsObj={userId:authorid}
            axios.get(other_center_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var header_img1=document.querySelector('#header_img1')
                var header_span1=document.querySelector('#header_span1')
                header_img1.src=res.data.user.avatar
                header_span1.innerHTML=res.data.user.nickname
                var center_follow1=document.querySelector('#center_follow1')
                var follow_page1=document.querySelector('#follow_page1')
                var follow_page_main1=document.querySelector('#follow_page_main1')
                var follow_number1=document.querySelector('#follow_number1')
                var fans_number1=document.querySelector('#fans_number1')
                var follow_url='http://175.178.193.182:8080/user/followerList'
                var follow_params={userId:authorid}
                axios.get(follow_url,{params:follow_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.followsList.length);
                    follow_number1.innerHTML=res.data.followsList.length
                })
                var fans_url='http://175.178.193.182:8080/user/fanList'
                var fans_params={userId:authorid}
                axios.get(fans_url,{params:fans_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.fansList.length);
                    fans_number1.innerHTML=res.data.fansList.length
                })
                var collection_number1=document.querySelector('#collection_number1')
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:authorid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.likedArticles.length);
                    localStorage.setItem('like_number1',res.data.likedArticles.length)
                })
                var like_number1=localStorage.getItem('like_number1')
                console.log(like_number1);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:authorid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.staredArticles.length);
                    localStorage.setItem('star_number1',res.data.staredArticles.length)
                })
                var star_number1=localStorage.getItem('star_number1')
                console.log(star_number1);
                var collection1=parseInt(like_number1)+parseInt(star_number1)
                console.log(collection1);
                collection_number1.innerHTML=collection1
            })
            var data_menu1_p1=document.querySelector('#data_menu1_p1')
            var data_menu2_p1=document.querySelector('#data_menu2_p1')
            var data_menu3_p1=document.querySelector('#data_menu3_p1')
            var note_part1=document.querySelector('#note_part1')
            var collection_part1=document.querySelector('#collection_part1')
            var liked_part1=document.querySelector('#liked_part1')
            var note_part_left1=document.querySelector('#note_part_left1')
            var note_part_right1=document.querySelector('#note_part_right1')
            var collection_part_left1=document.querySelector('#collection_part_left1')
            var collection_part_right1=document.querySelector('#collection_part_right1')
            var liked_part_left1=document.querySelector('#liked_part_left1')
            var liked_part_right1=document.querySelector('#liked_part_right1')
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            note_part_left1.innerHTML=""
            note_part_right1.innerHTML=""
            var main_url='http://175.178.193.182:8080/article/byAuthor'
            var paramsObj={authorId:otherid}
            axios.get(main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.articles.length;i++){
                    var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                    var recommend_page_left_11=document.createElement('div')
                    recommend_page_left_11.innerHTML = recommend_page_left_0;
                    if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                        note_part_right1.appendChild(recommend_page_left_11)
                    }else
                    if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                        note_part_left1.appendChild(recommend_page_left_11)
                    }
                }
            })
            collection_part_left1.innerHTML=""
            collection_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var star_url='http://175.178.193.182:8080/article/getStar'
            var star_params={userId:otherid}
            axios.get(star_url,{params:star_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.staredArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                        collection_part_left1.appendChild(liked_part_11)
                    }else
                    if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                        collection_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
            liked_part_left1.innerHTML=""
            liked_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var like_url='http://175.178.193.182:8080/article/getLike'
            var like_params={userId:otherid}
            axios.get(like_url,{params:like_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.likedArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                        liked_part_left1.appendChild(liked_part_11)
                    }else
                    if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                        liked_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
        }
    })
    //点击高效文章图片或标题进入详情页面
    efficience_page.addEventListener('click',function(e){
        let t=e.target
        console.log(t);
        if(t.id==='recommend_page_left_p1'||t.id==='recommend_page_head_top'){
            recommend_page_main.style.display='block'
            second.style.display='none'
            foot.style.display='none'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            var articleid=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('articleid',articleid)
            localStorage.setItem('authorid',authorid)
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_head=document.querySelector('#recommend_page_main_head')
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_btn=document.querySelector('#recommend_page_main_btn')
            var recommend_page_main_picture_li=document.querySelector('#recommend_page_main_picture_li')
            var recommend_page_main_picture_li_img=document.querySelector('#recommend_page_main_picture_li_img')
            var recommend_page_main_picture_ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_title=document.querySelector('#recommend_page_main_title')
            var recommend_page_main_title_p=document.querySelector('#recommend_page_main_title_p')
            var recommend_page_main_content_p=document.querySelector('#recommend_page_main_content_p')
            var recommend_page_main_tag_span2=document.querySelector('#recommend_page_main_tag_span2')
            var recommend_page_main_bottom_span1=document.querySelector('#recommend_page_main_bottom_span1')
            var recommend_page_main_bottom_span2=document.querySelector('#recommend_page_main_bottom_span2')
            var ol=document.querySelector('#circle')
            var ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_picture=document.querySelector('#recommend_page_main_picture')
            //渲染详情页面            
            var recommend_page_main_url='http://175.178.193.182:8080/article/byId'
            var articleId=t.parentNode.parentNode.getAttribute('articleId')
            var paramsObj={articleId:articleId}
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0
                for(i=0;i<res.data.article.images.length;i++){
                    var recommend_page_main_picture_li='<img src="./picture/login_bg1.jpg" alt="" id="recommend_page_main_picture_li_img">'
                    var recommend_page_main_picture_li1=document.createElement('li')
                    recommend_page_main_picture_li1.innerHTML=recommend_page_main_picture_li
                    recommend_page_main_picture_ul.appendChild(recommend_page_main_picture_li1)
                    recommend_page_main_picture_li1.childNodes[0].src=res.data.article.images[i];
                    recommend_page_main_title_p.innerHTML=res.data.article.title
                    recommend_page_main_content_p.innerHTML=res.data.article.content
                    recommend_page_main_tag_span2.innerHTML=res.data.article.tags
                    recommend_page_main_bottom_span1.innerHTML=res.data.article.postDate
                    var li=document.createElement('li');
                    li.setAttribute('index',i);
                    ol.appendChild(li);
                    ol.children[0].className='current';
                }
            })
            //获取收藏人数
            var recommend_page_main_search_bottom_collection_number=document.querySelector('#recommend_page_main_search_bottom_collection_number')
            var recommend_page_main_search_bottom_collection_span=document.querySelector('#recommend_page_main_search_bottom_collection_span')
            var recommend_page_main_search_bottom_like_span=document.querySelector('#recommend_page_main_search_bottom_like_span')
            var recommend_page_main_search_bottom_like_number=document.querySelector('#recommend_page_main_search_bottom_like_number')
            var myID=localStorage.getItem('myID')
            console.log(myID);
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                recommend_page_main_search_bottom_collection_number.innerHTML=res.data.article.starerList.length
                var i=0
                for(i=0;i<res.data.article.starerList.length;i++){
                    if(res.data.article.starerList[i]===myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click1'
                    }else
                    if(res.data.article.starerList[i]!=myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click2'
                    }
                }
                //获取点赞人数
                recommend_page_main_search_bottom_like_number.innerHTML=res.data.article.likerList.length
                if(res.data.article.likerList.length==0){
                    recommend_page_main_search_bottom_like_span.className='notlike'
                }
                for(i=0;i<res.data.article.likerList.length;i++){
                    //console.log(res.data.article.likerList[i]);
                    if(res.data.article.likerList[i]===myID){
                        recommend_page_main_search_bottom_like_span.className='likeone'
                        break
                    }else
                    if(res.data.article.likerList[i]!=myID){
                        recommend_page_main_search_bottom_like_span.className='notlike'
                    }
                }
            })  
            //获取评论并渲染评论
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            var articleId=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('the_article_id',articleId)
            var recommend_page_main_discussion_number_num=document.querySelector('#recommend_page_main_discussion_number_num')
            var recommend_page_main_discussion_nickname=document.querySelector('#recommend_page_main_discussion_nickname')
            var recommend_page_main_discussion_content=document.querySelector('#recommend_page_main_discussion_content')
            var recommend_page_main_discussion_like_number=document.querySelector('#recommend_page_main_discussion_like_number')
            var discussion_url='http://175.178.193.182:8080/review/byArticle'
            var discussion_Obj={
                articleId:articleId,
                pages:0
            }
            axios.get(discussion_url,{params:discussion_Obj}).then(function(res){
                console.log(res);
                recommend_page_main_discussion_number_num.innerHTML=res.data.reviews.length
                //一级评论
                for(let i=0;i<res.data.reviews.length;i++){
                    if(parseInt(res.data.reviews[i].authorId)!=parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }else
                    if(parseInt(res.data.reviews[i].authorId)===parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p><button id="delete_discussion_btn">删除</button></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }
                    recommend_page_main_discussion_div11.setAttribute('reviewId',res.data.reviews[i].reviewId);
                    recommend_page_main_discussion_div11.setAttribute('articleId',res.data.reviews[i].replyToArticleId);
                    recommend_page_main_discussion_div11.setAttribute('authorId',res.data.reviews[i].authorId);
                    var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                    var review_authorId=res.data.reviews[i].authorId
                    var baseInfo_obj={
                        userId:review_authorId
                    }
                    axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                        console.log(res);
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[0].src=res.data.user.avatar
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                    })
                    var like=recommend_page_main_discussion_div11.childNodes[0].childNodes[2].childNodes[0]
                    var j=0
                    if(res.data.reviews[i].likerList.length===0){
                        like.className='notlike'
                    }
                    for(j=0;j<res.data.reviews[i].likerList.length;j++){
                        if(res.data.reviews[i].likerList[j]===myID){
                            like.className='likeone'
                            break
                        }else
                        if(res.data.reviews[i].likerList[j]!=myID){
                            like.className='notlike'
                        }
                    }
                    //渲染二级评论
                    if(res.data.reviews[i].reviewList.length!=0){
                        for(let j=0;j<res.data.reviews[i].reviewList.length;j++){
                            var second_review_authorId=res.data.reviews[i].reviewList[j].authorId
                            var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                            var review_authorId=res.data.reviews[i].authorId
                            var baseInfo_obj={
                                userId:second_review_authorId
                            }
                            axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                                console.log(res);
                                console.log(recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[0]);
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[0].src=res.data.user.avatar
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                            })
                            if(parseInt(res.data.reviews[i].reviewList[j].authorId)===parseInt(myID)){
                                var second_discussion='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head1"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].reviewList[j].authorId+'</p><p id="recommend_page_main_discussion_content">'+res.data.reviews[i].reviewList[j].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like2"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].reviewList[j].likes+'</p><button id="delete_discussion_btn">删除</button></div></div>'
                                var second_discussion_div=document.createElement('div')
                                second_discussion_div.innerHTML=second_discussion
                                recommend_page_main_discussion_div11.appendChild(second_discussion_div)
                            }else
                            if(parseInt(res.data.reviews[i].reviewList[j].authorId)!=parseInt(myID)){
                                var second_discussion='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head1"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].reviewList[j].authorId+'</p><p id="recommend_page_main_discussion_content">'+res.data.reviews[i].reviewList[j].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like2"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].reviewList[j].likes+'</p></div></div>'
                                var second_discussion_div=document.createElement('div')
                                second_discussion_div.innerHTML=second_discussion
                                recommend_page_main_discussion_div11.appendChild(second_discussion_div)
                            }
                            second_discussion_div.setAttribute('reviewId',res.data.reviews[i].reviewList[j].reviewId)
                            var second_like=second_discussion_div.childNodes[0].childNodes[2].childNodes[0]
                            if(res.data.reviews[i].reviewList[j].likerList.length===0){
                                second_like.className='notlike'
                            }
                            var k=0
                            console.log(second_like);
                            console.log(res.data.reviews[i].reviewList[j].likerList.length);
                            for(k=0;k<res.data.reviews[i].reviewList[j].likerList.length;k++){
                                if(res.data.reviews[i].reviewList[j].likerList[k]===myID){
                                    second_like.className='likeone'
                                    break
                                }else
                                if(res.data.reviews[i].reviewList[j].likerList[k]!=myID){
                                    second_like.className='notlike'
                                }
                            }
                        }
                    }
                }
            })
            //获取文章用户信息渲染头像和昵称
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            var userobj={userId:userId}
            var userId_url='http://175.178.193.182:8080/user/fullInfo'
            axios.get(userId_url,{params:userobj}).then(function(res){
                console.log(res);
                recommend_page_main_head.src=res.data.user.avatar
                recommend_page_main_nickname.innerHTML=res.data.user.nickname
            })
            //获取用户个人的关注列表确认是否有关注该用户
            var myID=localStorage.getItem('myID')
            var myID_data={userId:myID}
            var myID_url='http://175.178.193.182:8080/user/followerList'
            axios.get(myID_url,{params:myID_data}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.followsList.length;i++){
                    if(res.data.followsList[i].userId==userId){
                        recommend_page_main_btn.innerHTML='已关注'
                        break
                    }else
                    if(res.data.followsList[i].userId!=userId){
                        recommend_page_main_btn.innerHTML='未关注'
                    }
                }
            })
            //点击头像进入
            recommend_page_main_head.addEventListener('click',function(){
                second.style.display='none'
                foot.style.display='none'
                var data_menu11=document.querySelector('#data_menu11')
                //渲染页面            
                var other_center_url='http://175.178.193.182:8080/user/fullInfo'
                var authorid=t.parentNode.parentNode.getAttribute('authorid')
                localStorage.setItem('otherid',authorid)
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var paramsObj={userId:authorid}
                axios.get(other_center_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var header_img1=document.querySelector('#header_img1')
                    var header_span1=document.querySelector('#header_span1')
                    header_img1.src=res.data.user.avatar
                    header_span1.innerHTML=res.data.user.nickname
                    var center_follow1=document.querySelector('#center_follow1')
                    var follow_page1=document.querySelector('#follow_page1')
                    var follow_page_main1=document.querySelector('#follow_page_main1')
                    var follow_number1=document.querySelector('#follow_number1')
                    var fans_number1=document.querySelector('#fans_number1')
                    var follow_url='http://175.178.193.182:8080/user/followerList'
                    var follow_params={userId:authorid}
                    axios.get(follow_url,{params:follow_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.followsList.length);
                        follow_number1.innerHTML=res.data.followsList.length
                    })
                    var fans_url='http://175.178.193.182:8080/user/fanList'
                    var fans_params={userId:authorid}
                    axios.get(fans_url,{params:fans_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.fansList.length);
                        fans_number1.innerHTML=res.data.fansList.length
                    })
                    var collection_number1=document.querySelector('#collection_number1')
                    var like_url='http://175.178.193.182:8080/article/getLike'
                    var like_params={userId:authorid}
                    axios.get(like_url,{params:like_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.likedArticles.length);
                        localStorage.setItem('like_number1',res.data.likedArticles.length)
                    })
                    var like_number1=localStorage.getItem('like_number1')
                    console.log(like_number1);
                    var star_url='http://175.178.193.182:8080/article/getStar'
                    var star_params={userId:authorid}
                    axios.get(star_url,{params:star_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.staredArticles.length);
                        localStorage.setItem('star_number1',res.data.staredArticles.length)
                    })
                    var star_number1=localStorage.getItem('star_number1')
                    console.log(star_number1);
                    var collection1=parseInt(like_number1)+parseInt(star_number1)
                    console.log(collection1);
                    collection_number1.innerHTML=collection1
                })
                var data_menu1_p1=document.querySelector('#data_menu1_p1')
                var data_menu2_p1=document.querySelector('#data_menu2_p1')
                var data_menu3_p1=document.querySelector('#data_menu3_p1')
                var note_part1=document.querySelector('#note_part1')
                var collection_part1=document.querySelector('#collection_part1')
                var liked_part1=document.querySelector('#liked_part1')
                var note_part_left1=document.querySelector('#note_part_left1')
                var note_part_right1=document.querySelector('#note_part_right1')
                var collection_part_left1=document.querySelector('#collection_part_left1')
                var collection_part_right1=document.querySelector('#collection_part_right1')
                var liked_part_left1=document.querySelector('#liked_part_left1')
                var liked_part_right1=document.querySelector('#liked_part_right1')
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                note_part_left1.innerHTML=""
                note_part_right1.innerHTML=""
                var main_url='http://175.178.193.182:8080/article/byAuthor'
                var paramsObj={authorId:otherid}
                axios.get(main_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.articles.length;i++){
                        var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                        var recommend_page_left_11=document.createElement('div')
                        recommend_page_left_11.innerHTML = recommend_page_left_0;
                        if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                            note_part_right1.appendChild(recommend_page_left_11)
                        }else
                        if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                            note_part_left1.appendChild(recommend_page_left_11)
                        }
                    }
                })
                collection_part_left1.innerHTML=""
                collection_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:otherid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.staredArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                            collection_part_left1.appendChild(liked_part_11)
                        }else
                        if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                            collection_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })
                liked_part_left1.innerHTML=""
                liked_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:otherid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.likedArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                            liked_part_left1.appendChild(liked_part_11)
                        }else
                        if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                            liked_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })

            })
            //获取评论人数
            var myIDobj={userId:myID}
            var recommend_page_main_search_bottom_discuss_number=document.querySelector('#recommend_page_main_search_bottom_discuss_number')
            var discuss_url='http://175.178.193.182:8080/notice/comment'
            axios.get(discuss_url,{params:myIDobj}).then(function(res){
                console.log(res);
                recommend_page_main_search_bottom_discuss_number.innerHTML=res.data.like.length
            })
        } 
        //进入个人页面
        if(t.id==='recommend_page_head'){
            var other_center=document.querySelector('#other_center')
            other_center.style.display='block'
            second.style.display='none'
            foot.style.display='none'
            var data_menu11=document.querySelector('#data_menu11')
            //渲染页面            
            var other_center_url='http://175.178.193.182:8080/user/fullInfo'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            localStorage.setItem('otherid',authorid)
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var paramsObj={userId:authorid}
            axios.get(other_center_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var header_img1=document.querySelector('#header_img1')
                var header_span1=document.querySelector('#header_span1')
                header_img1.src=res.data.user.avatar
                header_span1.innerHTML=res.data.user.nickname
                var center_follow1=document.querySelector('#center_follow1')
                var follow_page1=document.querySelector('#follow_page1')
                var follow_page_main1=document.querySelector('#follow_page_main1')
                var follow_number1=document.querySelector('#follow_number1')
                var fans_number1=document.querySelector('#fans_number1')
                var follow_url='http://175.178.193.182:8080/user/followerList'
                var follow_params={userId:authorid}
                axios.get(follow_url,{params:follow_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.followsList.length);
                    follow_number1.innerHTML=res.data.followsList.length
                })
                var fans_url='http://175.178.193.182:8080/user/fanList'
                var fans_params={userId:authorid}
                axios.get(fans_url,{params:fans_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.fansList.length);
                    fans_number1.innerHTML=res.data.fansList.length
                })
                var collection_number1=document.querySelector('#collection_number1')
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:authorid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.likedArticles.length);
                    localStorage.setItem('like_number1',res.data.likedArticles.length)
                })
                var like_number1=localStorage.getItem('like_number1')
                console.log(like_number1);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:authorid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.staredArticles.length);
                    localStorage.setItem('star_number1',res.data.staredArticles.length)
                })
                var star_number1=localStorage.getItem('star_number1')
                console.log(star_number1);
                var collection1=parseInt(like_number1)+parseInt(star_number1)
                console.log(collection1);
                collection_number1.innerHTML=collection1
            })
            var data_menu1_p1=document.querySelector('#data_menu1_p1')
            var data_menu2_p1=document.querySelector('#data_menu2_p1')
            var data_menu3_p1=document.querySelector('#data_menu3_p1')
            var note_part1=document.querySelector('#note_part1')
            var collection_part1=document.querySelector('#collection_part1')
            var liked_part1=document.querySelector('#liked_part1')
            var note_part_left1=document.querySelector('#note_part_left1')
            var note_part_right1=document.querySelector('#note_part_right1')
            var collection_part_left1=document.querySelector('#collection_part_left1')
            var collection_part_right1=document.querySelector('#collection_part_right1')
            var liked_part_left1=document.querySelector('#liked_part_left1')
            var liked_part_right1=document.querySelector('#liked_part_right1')
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            note_part_left1.innerHTML=""
            note_part_right1.innerHTML=""
            var main_url='http://175.178.193.182:8080/article/byAuthor'
            var paramsObj={authorId:otherid}
            axios.get(main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.articles.length;i++){
                    var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                    var recommend_page_left_11=document.createElement('div')
                    recommend_page_left_11.innerHTML = recommend_page_left_0;
                    if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                        note_part_right1.appendChild(recommend_page_left_11)
                    }else
                    if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                        note_part_left1.appendChild(recommend_page_left_11)
                    }
                }
            })
            collection_part_left1.innerHTML=""
            collection_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var star_url='http://175.178.193.182:8080/article/getStar'
            var star_params={userId:otherid}
            axios.get(star_url,{params:star_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.staredArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                        collection_part_left1.appendChild(liked_part_11)
                    }else
                    if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                        collection_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
            liked_part_left1.innerHTML=""
            liked_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var like_url='http://175.178.193.182:8080/article/getLike'
            var like_params={userId:otherid}
            axios.get(like_url,{params:like_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.likedArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                        liked_part_left1.appendChild(liked_part_11)
                    }else
                    if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                        liked_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
        }
    })
    //发二级评论
    var click_search_bottomdiv_btn2=document.querySelector('#click_search_bottomdiv_btn2')
    var click_search_bottomdiv_input2=document.querySelector('#click_search_bottomdiv_input2')
    var click_search2=document.querySelector('#click_search2')
    click_search_bottomdiv_btn2.addEventListener('click',function(){
        var reviewId=localStorage.getItem('reviewId')
        var articleid=localStorage.getItem('articleid')
        var authorid=localStorage.getItem('authorid')
        console.log(reviewId);
        var btn_url='http://175.178.193.182:8080/review'
        var btn_obj={
            replyToUserId:authorid,
            replyToArticleId:articleid,
            parentReviewId:reviewId,
            authorId:userId,
            content:click_search_bottomdiv_input2.value
        }
        axios.post(btn_url,btn_obj).then(function(res){
            console.log(res);
            click_search_bottomdiv_input2.value=""
            click_search2.style.display='none'
        })
    })
    //发评论
    var click_search_bottomdiv_btn=document.querySelector('#click_search_bottomdiv_btn')
    var click_search_bottomdiv_input=document.querySelector('#click_search_bottomdiv_input')
    var click_search=document.querySelector('#click_search')
    click_search_bottomdiv_btn.addEventListener('click',function(){
        var articleid=localStorage.getItem('articleid')
        var authorid=localStorage.getItem('authorid')
        console.log(authorid);
        console.log(authorid);
        var btn_url='http://175.178.193.182:8080/review'
        var btn_obj={
            replyToUserId:authorid,
            replyToArticleId:articleid,
            authorId:userId,
            content:click_search_bottomdiv_input.value
        }
        axios.post(btn_url,btn_obj).then(function(res){
            console.log(res);
            click_search_bottomdiv_input.value=""
            click_search.style.display='none'
        })
    })
    //获取用户个人基本信息拿到头像渲染进页面
    var recommend_page_main_discuss_head=document.querySelector('#recommend_page_main_discuss_head')
    var myIDobj={userId:userId}
    var myId_url='http://175.178.193.182:8080/user/baseInfo'
    axios.get(myId_url,{params:myIDobj}).then(function(res){
        console.log(res);
        recommend_page_main_discuss_head.src=res.data.user.avatar
    })
    //点击我的笔记图片或标题进入详情页面
    note_part.addEventListener('click',function(e){
        let t=e.target
        console.log(t);
        if(t.id==='recommend_page_left_p1'||t.id==='recommend_page_head_top'){
            recommend_page_main.style.display='block'
            center.style.display='none'
            foot.style.display='none'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            var articleid=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('articleid',articleid)
            localStorage.setItem('authorid',authorid)
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_head=document.querySelector('#recommend_page_main_head')
            var recommend_page_main_nickname=document.querySelector('#recommend_page_main_nickname')
            var recommend_page_main_btn=document.querySelector('#recommend_page_main_btn')
            var recommend_page_main_picture_li=document.querySelector('#recommend_page_main_picture_li')
            var recommend_page_main_picture_li_img=document.querySelector('#recommend_page_main_picture_li_img')
            var recommend_page_main_picture_ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_title=document.querySelector('#recommend_page_main_title')
            var recommend_page_main_title_p=document.querySelector('#recommend_page_main_title_p')
            var recommend_page_main_content_p=document.querySelector('#recommend_page_main_content_p')
            var recommend_page_main_tag_span2=document.querySelector('#recommend_page_main_tag_span2')
            var recommend_page_main_bottom_span1=document.querySelector('#recommend_page_main_bottom_span1')
            var recommend_page_main_bottom_span2=document.querySelector('#recommend_page_main_bottom_span2')
            var ol=document.querySelector('#circle')
            var ul=document.querySelector('#recommend_page_main_picture_ul')
            var recommend_page_main_picture=document.querySelector('#recommend_page_main_picture')
            //渲染详情页面            
            var recommend_page_main_url='http://175.178.193.182:8080/article/byId'
            var articleId=t.parentNode.parentNode.getAttribute('articleId')
            var paramsObj={articleId:articleId}
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0
                for(i=0;i<res.data.article.images.length;i++){
                    var recommend_page_main_picture_li='<img src="./picture/login_bg1.jpg" alt="" id="recommend_page_main_picture_li_img">'
                    var recommend_page_main_picture_li1=document.createElement('li')
                    recommend_page_main_picture_li1.innerHTML=recommend_page_main_picture_li
                    recommend_page_main_picture_ul.appendChild(recommend_page_main_picture_li1)
                    recommend_page_main_picture_li1.childNodes[0].src=res.data.article.images[i];
                    recommend_page_main_title_p.innerHTML=res.data.article.title
                    recommend_page_main_content_p.innerHTML=res.data.article.content
                    recommend_page_main_tag_span2.innerHTML=res.data.article.tags
                    recommend_page_main_bottom_span1.innerHTML=res.data.article.postDate
                    var li=document.createElement('li');
                    li.setAttribute('index',i);
                    ol.appendChild(li);
                    ol.children[0].className='current';
                }
            })
            //获取收藏人数
            var recommend_page_main_search_bottom_collection_number=document.querySelector('#recommend_page_main_search_bottom_collection_number')
            var recommend_page_main_search_bottom_collection_span=document.querySelector('#recommend_page_main_search_bottom_collection_span')
            var recommend_page_main_search_bottom_like_span=document.querySelector('#recommend_page_main_search_bottom_like_span')
            var recommend_page_main_search_bottom_like_number=document.querySelector('#recommend_page_main_search_bottom_like_number')
            var myID=localStorage.getItem('myID')
            console.log(myID);
            axios.get(recommend_page_main_url,{params:paramsObj}).then(function(res){
                recommend_page_main_search_bottom_collection_number.innerHTML=res.data.article.starerList.length
                var i=0
                for(i=0;i<res.data.article.starerList.length;i++){
                    if(res.data.article.starerList[i]===myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click1'
                    }else
                    if(res.data.article.starerList[i]!=myID){
                        recommend_page_main_search_bottom_collection_span.className='recommend_page_main_search_bottom_collection_span_click2'
                    }
                }
                //获取点赞人数
                recommend_page_main_search_bottom_like_number.innerHTML=res.data.article.likerList.length
                if(res.data.article.likerList.length==0){
                    recommend_page_main_search_bottom_like_span.className='notlike'
                }
                for(i=0;i<res.data.article.likerList.length;i++){
                    //console.log(res.data.article.likerList[i]);
                    if(res.data.article.likerList[i]===myID){
                        recommend_page_main_search_bottom_like_span.className='likeone'
                        break
                    }else
                    if(res.data.article.likerList[i]!=myID){
                        recommend_page_main_search_bottom_like_span.className='notlike'
                    }
                }
            })  
            //获取评论并渲染评论
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            var articleId=t.parentNode.parentNode.getAttribute('articleid')
            localStorage.setItem('the_article_id',articleId)
            var recommend_page_main_discussion_number_num=document.querySelector('#recommend_page_main_discussion_number_num')
            var recommend_page_main_discussion_nickname=document.querySelector('#recommend_page_main_discussion_nickname')
            var recommend_page_main_discussion_content=document.querySelector('#recommend_page_main_discussion_content')
            var recommend_page_main_discussion_like_number=document.querySelector('#recommend_page_main_discussion_like_number')
            var discussion_url='http://175.178.193.182:8080/review/byArticle'
            var discussion_Obj={
                articleId:articleId,
                pages:0
            }
            axios.get(discussion_url,{params:discussion_Obj}).then(function(res){
                console.log(res);
                recommend_page_main_discussion_number_num.innerHTML=res.data.reviews.length
                //一级评论
                for(let i=0;i<res.data.reviews.length;i++){
                    if(parseInt(res.data.reviews[i].authorId)!=parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }else
                    if(parseInt(res.data.reviews[i].authorId)===parseInt(myID)){
                        console.log(i);
                        var recommend_page_main_discussion_div='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].authorId+'</p><p id="recommend_page_main_discussion_content" class="first_discussion">'+res.data.reviews[i].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].likes+'</p><button id="delete_discussion_btn">删除</button></div></div>'
                        var recommend_page_main_discussion=document.querySelector('#recommend_page_main_discussion')
                        var recommend_page_main_discussion_div11=document.createElement('div')
                        recommend_page_main_discussion_div11.innerHTML = recommend_page_main_discussion_div;
                        recommend_page_main_discussion.appendChild(recommend_page_main_discussion_div11)
                    }
                    recommend_page_main_discussion_div11.setAttribute('reviewId',res.data.reviews[i].reviewId);
                    recommend_page_main_discussion_div11.setAttribute('articleId',res.data.reviews[i].replyToArticleId);
                    recommend_page_main_discussion_div11.setAttribute('authorId',res.data.reviews[i].authorId);
                    var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                    var review_authorId=res.data.reviews[i].authorId
                    var baseInfo_obj={
                        userId:review_authorId
                    }
                    axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                        console.log(res);
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[0].src=res.data.user.avatar
                        recommend_page_main_discussion.childNodes[i].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                    })
                    var like=recommend_page_main_discussion_div11.childNodes[0].childNodes[2].childNodes[0]
                    var j=0
                    if(res.data.reviews[i].likerList.length===0){
                        like.className='notlike'
                    }
                    for(j=0;j<res.data.reviews[i].likerList.length;j++){
                        if(res.data.reviews[i].likerList[j]===myID){
                            like.className='likeone'
                            break
                        }else
                        if(res.data.reviews[i].likerList[j]!=myID){
                            like.className='notlike'
                        }
                    }
                    //渲染二级评论
                    if(res.data.reviews[i].reviewList.length!=0){
                        for(let j=0;j<res.data.reviews[i].reviewList.length;j++){
                            var second_review_authorId=res.data.reviews[i].reviewList[j].authorId
                            var baseInfo_url='http://175.178.193.182:8080/user/baseInfo'
                            var review_authorId=res.data.reviews[i].authorId
                            var baseInfo_obj={
                                userId:second_review_authorId
                            }
                            axios.get(baseInfo_url,{params:baseInfo_obj}).then(function(res){
                                console.log(res);
                                console.log(recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[0]);
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[0].src=res.data.user.avatar
                                recommend_page_main_discussion.childNodes[i].childNodes[j+1].childNodes[0].childNodes[1].childNodes[0].innerHTML=res.data.user.nickname
                            })
                            var second_discussion='<div id="recommend_page_main_discussion_div"><img src="./picture/cartoon1.png" alt="" id="recommend_page_main_discussion_head1"><div id="recommend_page_main_discussion_left1"><p id="recommend_page_main_discussion_nickname">'+res.data.reviews[i].reviewList[j].authorId+'</p><p id="recommend_page_main_discussion_content">'+res.data.reviews[i].reviewList[j].content+'</p></div><div id="recommend_page_main_discussion_right1"><p id="recommend_page_main_discussion_like2"></p><p id="recommend_page_main_discussion_like_number">'+res.data.reviews[i].reviewList[j].likes+'</p></div></div>'
                            var second_discussion_div=document.createElement('div')
                            second_discussion_div.innerHTML=second_discussion
                            recommend_page_main_discussion_div11.appendChild(second_discussion_div)
                            second_discussion_div.setAttribute('reviewId',res.data.reviews[i].reviewList[j].reviewId)
                            var second_like=second_discussion_div.childNodes[0].childNodes[2].childNodes[0]
                            if(res.data.reviews[i].reviewList[j].likerList.length===0){
                                second_like.className='notlike'
                            }
                            var k=0
                            console.log(second_like);
                            console.log(res.data.reviews[i].reviewList[j].likerList.length);
                            for(k=0;k<res.data.reviews[i].reviewList[j].likerList.length;k++){
                                if(res.data.reviews[i].reviewList[j].likerList[k]===myID){
                                    second_like.className='likeone'
                                    break
                                }else
                                if(res.data.reviews[i].reviewList[j].likerList[k]!=myID){
                                    second_like.className='notlike'
                                }
                            }
                        }
                    }
                }
            })
            //获取文章用户信息渲染头像和昵称
            var userId=t.parentNode.parentNode.getAttribute('authorid')
            var userobj={userId:userId}
            var userId_url='http://175.178.193.182:8080/user/fullInfo'
            axios.get(userId_url,{params:userobj}).then(function(res){
                console.log(res);
                recommend_page_main_head.src=res.data.user.avatar
                recommend_page_main_nickname.innerHTML=res.data.user.nickname
            })
            //获取用户个人的关注列表确认是否有关注该用户
            var myID=localStorage.getItem('myID')
            var myID_data={userId:myID}
            var myID_url='http://175.178.193.182:8080/user/followerList'
            axios.get(myID_url,{params:myID_data}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.followsList.length;i++){
                    if(res.data.followsList[i].userId==userId){
                        recommend_page_main_btn.innerHTML='已关注'
                        break
                    }else
                    if(res.data.followsList[i].userId!=userId){
                        recommend_page_main_btn.innerHTML='未关注'
                    }
                }
            })
            //点击头像进入
            recommend_page_main_head.addEventListener('click',function(){
                second.style.display='none'
                foot.style.display='none'
                var data_menu11=document.querySelector('#data_menu11')
                //渲染页面            
                var other_center_url='http://175.178.193.182:8080/user/fullInfo'
                var authorid=t.parentNode.parentNode.getAttribute('authorid')
                localStorage.setItem('otherid',authorid)
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var paramsObj={userId:authorid}
                axios.get(other_center_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var header_img1=document.querySelector('#header_img1')
                    var header_span1=document.querySelector('#header_span1')
                    header_img1.src=res.data.user.avatar
                    header_span1.innerHTML=res.data.user.nickname
                    var center_follow1=document.querySelector('#center_follow1')
                    var follow_page1=document.querySelector('#follow_page1')
                    var follow_page_main1=document.querySelector('#follow_page_main1')
                    var follow_number1=document.querySelector('#follow_number1')
                    var fans_number1=document.querySelector('#fans_number1')
                    var follow_url='http://175.178.193.182:8080/user/followerList'
                    var follow_params={userId:authorid}
                    axios.get(follow_url,{params:follow_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.followsList.length);
                        follow_number1.innerHTML=res.data.followsList.length
                    })
                    var fans_url='http://175.178.193.182:8080/user/fanList'
                    var fans_params={userId:authorid}
                    axios.get(fans_url,{params:fans_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.fansList.length);
                        fans_number1.innerHTML=res.data.fansList.length
                    })
                    var collection_number1=document.querySelector('#collection_number1')
                    var like_url='http://175.178.193.182:8080/article/getLike'
                    var like_params={userId:authorid}
                    axios.get(like_url,{params:like_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.likedArticles.length);
                        localStorage.setItem('like_number1',res.data.likedArticles.length)
                    })
                    var like_number1=localStorage.getItem('like_number1')
                    console.log(like_number1);
                    var star_url='http://175.178.193.182:8080/article/getStar'
                    var star_params={userId:authorid}
                    axios.get(star_url,{params:star_params}).then(function(res){
                        console.log(res);
                        console.log(res.data.staredArticles.length);
                        localStorage.setItem('star_number1',res.data.staredArticles.length)
                    })
                    var star_number1=localStorage.getItem('star_number1')
                    console.log(star_number1);
                    var collection1=parseInt(like_number1)+parseInt(star_number1)
                    console.log(collection1);
                    collection_number1.innerHTML=collection1
                })
                var data_menu1_p1=document.querySelector('#data_menu1_p1')
                var data_menu2_p1=document.querySelector('#data_menu2_p1')
                var data_menu3_p1=document.querySelector('#data_menu3_p1')
                var note_part1=document.querySelector('#note_part1')
                var collection_part1=document.querySelector('#collection_part1')
                var liked_part1=document.querySelector('#liked_part1')
                var note_part_left1=document.querySelector('#note_part_left1')
                var note_part_right1=document.querySelector('#note_part_right1')
                var collection_part_left1=document.querySelector('#collection_part_left1')
                var collection_part_right1=document.querySelector('#collection_part_right1')
                var liked_part_left1=document.querySelector('#liked_part_left1')
                var liked_part_right1=document.querySelector('#liked_part_right1')
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                note_part_left1.innerHTML=""
                note_part_right1.innerHTML=""
                var main_url='http://175.178.193.182:8080/article/byAuthor'
                var paramsObj={authorId:otherid}
                axios.get(main_url,{params:paramsObj}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.articles.length;i++){
                        var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                        var recommend_page_left_11=document.createElement('div')
                        recommend_page_left_11.innerHTML = recommend_page_left_0;
                        if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                            note_part_right1.appendChild(recommend_page_left_11)
                        }else
                        if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                            note_part_left1.appendChild(recommend_page_left_11)
                        }
                    }
                })
                collection_part_left1.innerHTML=""
                collection_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:otherid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.staredArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                            collection_part_left1.appendChild(liked_part_11)
                        }else
                        if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                            collection_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })
                liked_part_left1.innerHTML=""
                liked_part_right1.innerHTML=""
                var otherid=localStorage.getItem('otherid')
                console.log(otherid);
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:otherid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    var i=0;
                    for(i=0;i<res.data.likedArticles.length;i++){
                        var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                        var liked_part_11=document.createElement('div')
                        liked_part_11.innerHTML = liked_part_1;
                        if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                            liked_part_left1.appendChild(liked_part_11)
                        }else
                        if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                            liked_part_right1.appendChild(liked_part_11)
                        }
                    }   
                })

            })
            //获取评论人数
            var myIDobj={userId:myID}
            var recommend_page_main_search_bottom_discuss_number=document.querySelector('#recommend_page_main_search_bottom_discuss_number')
            var discuss_url='http://175.178.193.182:8080/notice/comment'
            axios.get(discuss_url,{params:myIDobj}).then(function(res){
                console.log(res);
                recommend_page_main_search_bottom_discuss_number.innerHTML=res.data.like.length
            })
        } 
        //进入个人页面
        if(t.id==='recommend_page_head'){
            var other_center=document.querySelector('#other_center')
            other_center.style.display='block'
            second.style.display='none'
            foot.style.display='none'
            var data_menu11=document.querySelector('#data_menu11')
            //渲染页面            
            var other_center_url='http://175.178.193.182:8080/user/fullInfo'
            var authorid=t.parentNode.parentNode.getAttribute('authorid')
            localStorage.setItem('otherid',authorid)
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var paramsObj={userId:authorid}
            axios.get(other_center_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var header_img1=document.querySelector('#header_img1')
                var header_span1=document.querySelector('#header_span1')
                header_img1.src=res.data.user.avatar
                header_span1.innerHTML=res.data.user.nickname
                var center_follow1=document.querySelector('#center_follow1')
                var follow_page1=document.querySelector('#follow_page1')
                var follow_page_main1=document.querySelector('#follow_page_main1')
                var follow_number1=document.querySelector('#follow_number1')
                var fans_number1=document.querySelector('#fans_number1')
                var follow_url='http://175.178.193.182:8080/user/followerList'
                var follow_params={userId:authorid}
                axios.get(follow_url,{params:follow_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.followsList.length);
                    follow_number1.innerHTML=res.data.followsList.length
                })
                var fans_url='http://175.178.193.182:8080/user/fanList'
                var fans_params={userId:authorid}
                axios.get(fans_url,{params:fans_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.fansList.length);
                    fans_number1.innerHTML=res.data.fansList.length
                })
                var collection_number1=document.querySelector('#collection_number1')
                var like_url='http://175.178.193.182:8080/article/getLike'
                var like_params={userId:authorid}
                axios.get(like_url,{params:like_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.likedArticles.length);
                    localStorage.setItem('like_number1',res.data.likedArticles.length)
                })
                var like_number1=localStorage.getItem('like_number1')
                console.log(like_number1);
                var star_url='http://175.178.193.182:8080/article/getStar'
                var star_params={userId:authorid}
                axios.get(star_url,{params:star_params}).then(function(res){
                    console.log(res);
                    console.log(res.data.staredArticles.length);
                    localStorage.setItem('star_number1',res.data.staredArticles.length)
                })
                var star_number1=localStorage.getItem('star_number1')
                console.log(star_number1);
                var collection1=parseInt(like_number1)+parseInt(star_number1)
                console.log(collection1);
                collection_number1.innerHTML=collection1
            })
            var data_menu1_p1=document.querySelector('#data_menu1_p1')
            var data_menu2_p1=document.querySelector('#data_menu2_p1')
            var data_menu3_p1=document.querySelector('#data_menu3_p1')
            var note_part1=document.querySelector('#note_part1')
            var collection_part1=document.querySelector('#collection_part1')
            var liked_part1=document.querySelector('#liked_part1')
            var note_part_left1=document.querySelector('#note_part_left1')
            var note_part_right1=document.querySelector('#note_part_right1')
            var collection_part_left1=document.querySelector('#collection_part_left1')
            var collection_part_right1=document.querySelector('#collection_part_right1')
            var liked_part_left1=document.querySelector('#liked_part_left1')
            var liked_part_right1=document.querySelector('#liked_part_right1')
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            note_part_left1.innerHTML=""
            note_part_right1.innerHTML=""
            var main_url='http://175.178.193.182:8080/article/byAuthor'
            var paramsObj={authorId:otherid}
            axios.get(main_url,{params:paramsObj}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.articles.length;i++){
                    var recommend_page_left_0='<div id="recommend_page_left_1"><img src="'+res.data.articles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.articles[i].title+'</p><img src="'+res.data.articles[i].images[0]+'" alt="" id="recommend_page_head"><span>'+res.data.articles[i].authorId+'</span><span id="like"></span><span id="like_numeber">'+res.data.articles[i].likes+'</span></div>'
                    var recommend_page_left_11=document.createElement('div')
                    recommend_page_left_11.innerHTML = recommend_page_left_0;
                    if(note_part_right1.clientHeight<note_part_left1.clientHeight){
                        note_part_right1.appendChild(recommend_page_left_11)
                    }else
                    if(note_part_right1.clientHeight>=note_part_left1.clientHeight){
                        note_part_left1.appendChild(recommend_page_left_11)
                    }
                }
            })
            collection_part_left1.innerHTML=""
            collection_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var star_url='http://175.178.193.182:8080/article/getStar'
            var star_params={userId:otherid}
            axios.get(star_url,{params:star_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.staredArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.staredArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.staredArticles[i].title+'</p><img src="'+res.data.staredArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.staredArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.staredArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(collection_part_left1.clientHeight<=collection_part_right1.clientHeight){
                        collection_part_left1.appendChild(liked_part_11)
                    }else
                    if(collection_part_left1.clientHeight>collection_part_right1.clientHeight){
                        collection_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
            liked_part_left1.innerHTML=""
            liked_part_right1.innerHTML=""
            var otherid=localStorage.getItem('otherid')
            console.log(otherid);
            var like_url='http://175.178.193.182:8080/article/getLike'
            var like_params={userId:otherid}
            axios.get(like_url,{params:like_params}).then(function(res){
                console.log(res);
                var i=0;
                for(i=0;i<res.data.likedArticles.length;i++){
                    var liked_part_1='<div id="recommend_page_left_1"><img src="'+res.data.likedArticles[i].images[0]+'" alt=""><p id="recommend_page_left_p1">'+res.data.likedArticles[i].title+'</p><img src="'+res.data.likedArticles[i].avatar+'" alt="" id="recommend_page_head"><span>'+res.data.likedArticles[i].authorName+'</span><span id="like"></span><span id="like_numeber">'+res.data.likedArticles[i].likes+'</span></div>'
                    var liked_part_11=document.createElement('div')
                    liked_part_11.innerHTML = liked_part_1;
                    if(liked_part_left1.clientHeight<=liked_part_right1.clientHeight){
                        liked_part_left1.appendChild(liked_part_11)
                    }else
                    if(liked_part_left1.clientHeight>liked_part_right1.clientHeight){
                        liked_part_right1.appendChild(liked_part_11)
                    }
                }   
            })
        }
    })
    var search_page_article=document.querySelector('#search_page_article')
    search_page_article.addEventListener('click',function(e){
        var t=e.target
        if(t.id==='like'){
            if(t.className==='notlike'){
                var url='http://175.178.193.182:8080/article/like'
                var articleId=t.parentNode.parentNode.getAttribute('articleid')
                var obj={
                    userId:userId,
                    articleId:articleId
                }
                axios.post(url,obj).then(function(res){
                    console.log(res);
                    t.className='likeone'
                    t.nextSibling.innerHTML=parseInt(t.nextSibling.innerHTML)+parseInt(1)
                })
            }else
            if(t.className==='likeone'){
                var url='http://175.178.193.182:8080/article/unlike'
                var articleId=t.parentNode.parentNode.getAttribute('articleid')
                var obj={
                    userId:userId,
                    articleId:articleId
                }
                axios.post(url,obj).then(function(res){
                    console.log(res);
                    t.className='notlike'
                    t.nextSibling.innerHTML=parseInt(t.nextSibling.innerHTML)-parseInt(1)
                })
            }
        }
    })
})