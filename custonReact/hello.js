function customRender(ReactEle,mainContainer){
    const ele=document.createElement(ReactEle.type);

    ele.innerHTML=ReactEle.child;
    for (const key in ReactEle.prop) {
        ele.setAttribute(key,ReactEle.prop[key]);
        }
    

    mainContainer.appendChild(ele)
}

const ReactEle= {
    type: 'a',
    prop: {
        href:'https://chatgpt.com/c/67795f5a-a204-8012-82ca-bb2e03e99562',
        target:'_top'
    },
    child: 'Click me to visit children'
}

const mainContainer = document.querySelector('#root');

customRender(ReactEle,mainContainer);