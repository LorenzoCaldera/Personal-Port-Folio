import React from "react"

const scrollEff = (references, callback) => {
    React.useEffect(() => {
        const elements = [...references]
        const setClass = [...callback]
        const handlerScroll = (references, callback) => {
            references.forEach((element, index) => {
                const { y } = element.current.getBoundingClientRect()
                const currentClass = (y < -window.innerHeight || y  > window.innerHeight) ? "hidden" : "show"
                callback[index](currentClass)
            })
        }
        window.addEventListener('scroll', () => {handlerScroll(elements, setClass)})
        return () => {window.removeEventListener('scroll', handlerScroll)}
    })
}

export default scrollEff