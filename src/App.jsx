import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    // defaultValues : {
    //   example: 'test',
    //   exampleRequired: 'test1'
    // }
  })

  const onSubmit = async (data) => {
    await new Promise(res => setTimeout(res, 2000))
    console.log(data)
    reset()
  }

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>Yozilishi kerak!</span>}

      <input disabled={isSubmitting} type="submit" />
      { isSubmitting ? 'Submitting...' : 'Register'}
    </form>
  )
}

export default App
