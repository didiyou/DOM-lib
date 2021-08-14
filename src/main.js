// span = dom.create("<span></span>")
// dom.after(span,father)
const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(empty,'title',"I'm King")
const title = dom.attr(empty,"title")
console.log(`title:${title}`)
dom.text(father,"这是修改后的文本")

dom.style(father,{border:'1px solid red',color:'green'})
dom.style(father,'border')
dom.style(father,'border','1px solid yellow')
dom.class.add(father,'red')
dom.class.remove(father,'red')
console.log(dom.class.has(father,'red'))

fn= ()=>{
    console.log("点击了")
}
dom.on(father,'click',fn)
//test = dom.find('#test')[0]
console.log(dom.find('.red',test)[0])
console.log(dom.siblings(dom.find('#t2')[0]))
console.log(dom.next(dom.find('#t1')[0]))
const t = dom.find('#t2')[0]
dom.each(dom.children(t),(n)=>dom.style(n,'color','red'))
console.log(dom.index(t))