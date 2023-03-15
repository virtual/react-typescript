const EventComponent: React.FC = () => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }

    // React.DragEventHandler<HTMLDivElement> resolves to without Handler
    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event.target)
    }

    return (
        <div>
            <input onChange={onChange} />

            <div draggable onDragStart={onDragStart}>Drag me</div>
        </div>
    )
}

export default EventComponent;