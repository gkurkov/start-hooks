import React from 'react'
import CollapseWrapper from '../common/collapse'
const ChildrenExercise = () => {
    const ParentComponent = ({ children }) => {
        return React.Children.map(children, (child, i) => {
            const key = i + 1
            return (
                <div>
                    {key}
                    {child}
                </div>
            )
        })
    }
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{' '}
                <code>React.Children.map</code> так и{' '}
                <code>React.Children.toArray</code>
            </p>
            <ParentComponent>
                <Component />
                <Component />
                <Component />
            </ParentComponent>
        </CollapseWrapper>
    )
}

const Component = () => {
    return <div>Компонент списка</div>
}

export default ChildrenExercise
