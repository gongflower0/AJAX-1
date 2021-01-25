let n=1
getPage.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open("GET",`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            
            if(request.status>=200&&request.status<300){
                const array=JSON.parse(request.reponse)
                array.forEach(item => {
                    const li=document.createElement("li")
                 li.textContent=item.id
                 xxx.appendChild(li)
                });
                n+=1
            }
        }
        request.send()
    }
}
getJSON.onclick=()=>{
   
    const request=new XMLHttpRequest();
    request.open("GET","/5.json");
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            
            if(request.status>=200&&request.status<300){
                
            const object=JSON.parse(request.response)
            //可以把符合json的字符串变成js的对象，或其他类型
            myName.textContent=object.name
            }
        }
    };
    request.send();
};
getXML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open("GET","/4.xml")
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
            const dom=request.responseXML
            const text=dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
            }
        }
    };
    request.send();
}

getHTML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open("GET","/3.html")
    request.onreadystatechange=()=>{
        //下载完成，但不知道是成功2xx还是失败4xx，5xx
   if(request.readyState===4){
       if(request.status>=200&&request.status<300){
//创建一个div
        const div=document.createElement('div')
//编写div内容
        div.innerHTML=request.response
//把div插到body里面去
        document.body.appendChild(div)
  }else{
      alert('加载html失败')
  }
    }
      }
    
    request.send();
}
getCSS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/style.css');
    request.onreadystatechange=()=>{
    if(request.readyState===4){
        if(request.status>=200&&request.status<300){
        
        //创建style标签
        const style=document.createElement('style')
        //编写style内容
        style.innerHTML=request.response
        //插到头里面去
        document.head.appendChild(style)
        }else {
            alert('加载css失败')
        }
    }
}
    request.send()
}
getJS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/2.js');
    request.onreadystatechange=()=>{
    if(request.readyState===4){
        if(request.status>=200&&request.status<300){
        
//创建script标签
        const script=document.createElement('script')
        //编写script内容
        script.innerHTML=request.response
        //插到身体里面去
        document.body.appendChild(script)
        }else{
            alert('加载script失败')
        }
    }
}
    request.send()
}
