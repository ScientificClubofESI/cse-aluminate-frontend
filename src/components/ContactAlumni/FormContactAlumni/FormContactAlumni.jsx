import axios from '../../../utils/axios.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from 'formik';
import * as Yup from 'yup';

/**
* @param {Service[]} services - List of services to choose from
 * */
const validationSchema = Yup.object({
  senderName: Yup.string().required('Full name is required'),
  senderEmail: Yup.string().email('Invalid email address').required('Email is required'),
  object: Yup.string().required('Object is required'),
  service: Yup.string().required('Service is required'),
  description: Yup.string().required('Description is required'),
});
const FormContactAlumni = ({ destination, services }) => {

    const handleSubmit = async (e) => {
        // e.preventDefault();

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

                const response = await axios.post('v2/alumni/send-email', data)
                alert(response.data.message)
            } catch (e) {
                console.log(e)
                alert('An error occured, please try again later');

            }
        }
    }
    const formik = useFormik({
      initialValues: {
        senderName: '',
        senderEmail: '',
        object: '',
        service: '',
        description: '',
      },
      validationSchema,
      onSubmit: async (values) => {
        try {
          if (!process.env.NEXT_PUBLIC_API_URL) {
            // Temporary test
            alert(JSON.stringify(values));
          } else {
            // Use the actual backend
            const data = { ...values, destination };
            const response = await axios.post('v2/alumni/send-email', data);
            alert(response.data.message);
          }
        } catch (error) {
          console.error(error);
          alert('An error occurred, please try again later');
        }
      },
    });
    

    return (
        <div className="grid p-5 w-screen lg:w-[70vw] justify-items-center content-center">
            <p className="text-2xl  font-medium text-Primary-600">
                Please fill this form
            </p>
            <form onSubmit={formik.handleSubmit} className="mt-8 grid justify-items-center content-center">
      <div className="grid gap-4">
        <div className="flex gap-4">
          <div className="grid w-1/2">
            <label htmlFor="senderName" className="m-2">
              Full name*
            </label>
            <input
              type="text"
              id="senderName"
              name="senderName"
              placeholder="Your full name"
              className="py-2 px-3 w-full radius-5 font-light rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.senderName}
            />
            {formik.touched.senderName && formik.errors.senderName ? (
              <div className="text-red-500 text-sm">{formik.errors.senderName}</div>
            ) : null}
          </div>
          <div className="grid w-1/2">
            <label htmlFor="senderEmail" className="m-2">
              Email Address*
            </label>
            <input
              type="email"
              id="senderEmail"
              name="senderEmail"
              placeholder="example@gmail.com"
              className="px-3 py-2 font-light rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.senderEmail}
            />
            {formik.touched.senderEmail && formik.errors.senderEmail ? (
              <div className="text-red-500 text-sm">{formik.errors.senderEmail}</div>
            ) : null}
          </div>
        </div>
        <div className="grid">
          <label htmlFor="object" className="m-2">
            Object*
          </label>
          <input
            type="text"
            id="object"
            name="object"
            className="px-3 w-full py-2 rounded-lg font-light"
            placeholder="Define briefly your object"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.object}
          />
          {formik.touched.object && formik.errors.object ? (
            <div className="text-red-500 text-sm">{formik.errors.object}</div>
          ) : null}
        </div>
        <label className="m-2 mt-0">Choose a service*</label>
        <div className="flex gap-5 flex-wrap">
          {services.map((service) => (
            <div key={service.id} className="gap-1 flex items-center">
              <input
                type="radio"
                id={service.id}
                name="service"
                value={service.name}
                className="accent-Secondary-600"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor={service.id} className="flex-wrap font-light whitespace-nowrap">
                {service.name}
              </label>
            </div>
          ))}
        </div>
        {formik.touched.service && formik.errors.service ? (
          <div className="text-red-500 text-sm">{formik.errors.service}</div>
        ) : null}
        <div className="grid">
          <label htmlFor="description" className="m-2 mt-0">
            Description*
          </label>
          <input
            type="text"
            name="description"
            placeholder="Define briefly your object"
            className="pb-[20vh] pt-2 px-3 rounded-lg font-light flex items-start justify-start"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500 text-sm">{formik.errors.description}</div>
          ) : null}
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="bg-Primary-600 py-3 px-8 flex gap-3 items-center text-white rounded-3xl"
        >
          Send Message
          <FontAwesomeIcon icon={faPaperPlane} color="white" />
        </button>
      </div>
    </form>
        </div>
    );
};

export default FormContactAlumni;
