export default function Card(props) {

    return (
        <div class="bg-cyan-50 bg-opacity-50 lg:m-2 p-4 text-center rounded-md shadow-md">
            {props.children}
        </div>
    )
}
