import React, { useRef, useState } from 'react'
import CollapseWrapper from '../common/collapse'

const UseRefExercise = () => {
    const inputRef = useRef()
    const [text, setText] = useState('block')

    const handleClick = () => {
        inputRef.current.style.width = '80px'
        inputRef.current.style.height = '150px'
        setText('text')
    }
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary  justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: 'white'
                }}
                ref={inputRef}
            >
                <small>{text}</small>
            </div>
            <button className="btn btn-primary mt-3" onClick={handleClick}>
                Кнопка
            </button>
        </CollapseWrapper>
    )
}

export default UseRefExercise
