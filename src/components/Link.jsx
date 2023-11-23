import { BUTTON, EVENTS } from "../utils/consts"

export const navigate = (href) => {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export const Link = ({ target, to, ...props }) => {
    const handleClick = (event) => {
        const isMainEvent = event.button === BUTTON.primary
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'

        if(isMainEvent && isManageableEvent && !isModifiedEvent){
            event.preventDefault()
            navigate(to)
        }
    }

    return <a href={to} target={target} onClick={handleClick} {...props}/>
}