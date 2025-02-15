import axios from '../../../utils/axios.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

/**
* @param {Service[]} services - List of services to choose from
 * */
const FormContactAlumni = ({ destination, services }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!process.env.NEXT_PUBLIC_API_URL) {
            // temporary test
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            alert(JSON.stringify(data))
        } else {
            // use the actual backend
            try {
                console.log('here')
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData);
                data.destination = destination;

                const response = await axios.post('v1/alumni/send-email', data)
                alert(response.data.message)
            } catch (e) {
                console.log(e)
                alert('An error occured, please try again later');

            }
        }
    }
    return (
        <div className="grid p-5 w-screen lg:w-[70vw] justify-items-center content-center">
            <p className="text-2xl  font-medium text-Primary-600">
                Please fill this form
            </p>
            <form
                onSubmit={handleSubmit}
                className="mt-8 grid justify-items-center content-center  "
            >
                <div className="grid gap-4   ">
                    <div className="flex gap-4 ">
                        <div className="grid w-1/2">
                            <label htmlFor="name" className="m-2 ">
                                Full name*
                            </label>
                            <input
                                type="name"
                                id="name"
                                name="senderName"
                                placeholder="Your full name"
                                className="py-2 px-3 w-full radius-5 font-light rounded-lg"
                                required
                            />
                        </div>
                        <div className="grid w-1/2">
                            <label htmlFor="email" className="m-2">
                                Email Address*
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="senderEmail"
                                placeholder="example@gmail.com"
                                className="px-3 py-2  font-light rounded-lg"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid ">
                        <label htmlFor="object" className="m-2">
                            Object*
                        </label>
                        <input
                            type="text"
                            id="object"
                            name="object"
                            className="px-3 w-full py-2 rounded-lg font-light"
                            placeholder=" Define breifly your object "
                        />
                    </div>
                    <label className="m-2 mt-0 ">Choose a service*</label>

                    <div className="flex gap-5  flex-wrap">
                        {services?.map((service) => (
                            <div key={service.id} className="gap-1 flex items-center ">
                                <input
                                    type="radio"
                                    id={service.id}
                                    name="service"
                                    value={service.name}
                                    className="accent-Secondary-600"
                                />
                                <label
                                    htmlFor={service.id}
                                    className="flex-wrap font-light whitespace-nowrap"
                                >
                                    {service.name}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="grid">
                        <label htmlFor="" className="m-2 mt-0">
                            Description*
                        </label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Define breifly your object"
                            className="pb-[20vh] pt-2 px-3 rounded-lg font-light flex items-start justify-start"
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="bg-Primary-600 py-3 px-8 flex gap-3 items-center text-white rounded-3xl"
                    >
                        Send Message
                        <FontAwesomeIcon icon={faPaperPlane} color="white" />{" "}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormContactAlumni;
