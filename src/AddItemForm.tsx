import React, {useState} from "react";

type AddItemFormType = {
    addItem: (titleInput: string) => void
}

export function AddItemForm(props: AddItemFormType) {
    let [titleInput, setTitleInput] = useState('');
    let [error, setError] = useState<string | null>(null)

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setTitleInput(e.currentTarget.value)
        setError("")
    }

    function onKeyPressHandler(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }

    function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        addTaskHandler()
    }

    function addTaskHandler() {
        if (titleInput.trim() !== "") {
            props.addItem(titleInput)
            setTitleInput("")
        } else {
            setError("This pole is required")
        }
    }

    return (
        <div>
            <input className={error ? "error" : ""}
                   value={titleInput}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={onClickHandler}
            >+
            </button>
            {error ? <div className="error-message">{error}</div> : null}
        </div>
    )
}