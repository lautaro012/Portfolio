
export default function Form () {


    return (
        <form onSubmit={() => console.log('hola')}>
            <span> Your name </span>
            <span >  </span>
            <span> Company </span>
            <span> </span>
            <textarea></textarea>
            <button type='submit'> Send </button>
        </form>
    )
}