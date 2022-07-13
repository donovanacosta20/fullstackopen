import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'
import CreateBlogForm from './CreateBlogForm'

test('renders title and author', () => {
    const blog = {
        title: 'Patterns desing C#',
        author: 'Donovan Acosta',
        url: 'test',
        likes: 10
    }

    const component = render(
        <Blog blog={blog} />
    )

    expect(component.container).toHaveTextContent(
        'Patterns desing C#'
    )

    const div = component.container.querySelector('.blog')

    expect(div).toHaveTextContent(
        'Patterns desing C# Donovan Acosta'
    )
})


test('render likes and more information when click button show', () => {
    const blog = {
        title: 'Patterns desing C#',
        author: 'Donovan Acosta',
        url: 'www.donovandev.com',
        likes: 10
    }

    const component = render(
        <Blog blog={blog} />
    )

    const button = component.getByText('view')
    fireEvent.click(button)

    expect(component.container).toHaveTextContent(
        'www.donovandev.com'
    )

    expect(component.container).toHaveTextContent(
        'likes: 10'
    )

})

test('click two time on like button',() => {
    const blog = {
        title: 'Patterns desing C#',
        author: 'Donovan Acosta',
        url: 'www.donovandev.com',
        likes: 10
    }

    const mockHandler = jest.fn()

    const component = render(
        <Blog blog={blog} updateLikes={mockHandler}/>
    )

    const button = component.getByText('like')
    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(2)
})

test('verfy if id is correct',() => {
    const component = render(
        <CreateBlogForm />
    )

    const title = component.container.querySelector('#title')
    expect(title).toBeDefined()
})