export default function Card(props) {

    return (
        <div class="bg-cyan-50 bg-opacity-40 lg:m-2 rounded-md p-5 text-center shadow-md">
            {props.children}
        </div>
    )
}
