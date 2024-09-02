'use client'

import { useState } from 'react'
import TodoForm from '@/components/organisms/TodoForm'
import TodoList from '@/components/organisms/TodoList'
import { getTodos, saveTodos } from '@/utils/storage'

export default function TodoTemplate() {
  // TODO一覧をローカルストレージから取得
  // todosに値が追加されたら再描画させたいのでStateとして扱う
  const initialState = getTodos()
  const [todos, setTodos] = useState(initialState)

  // 追加処理
  // 引き数に新規TODOを受け取る
  const addTodo = (newTodo) => {
    // 新規TODOをtodosに追加
    const updatedTodos = [...todos, newTodo]
    // Stateのtodosを更新
    setTodos(updatedTodos)
    // ローカルストレージのTODO一覧を更新
    saveTodos(updatedTodos)
  }

  return (
    <div>
      <h1>TODOアプリ</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}