import { useState } from 'react'
import Form from './Form'

export default function AddInfo(props) {
  const [textAdd, setTextAdd] = useState('')
  const [uploadphoto, setUploadPhoto] = useState('')
  const [visitreason, setVisitReason] = useState('')
  const [referred, setReferred] = useState('')
  const [isfriend, setIsfriend] = useState('')
  const [willbite, setWillBite] = useState('')
  const [hides, setHides] = useState('')
  const [extrahands, setExtraHands] = useState('')
  const [sedation, setSedation] = useState('')
  const [muzzle, setMuzzle] = useState('')
  const [aggressive, setIsAggressive] = useState('')

  const addNewBtn = ''
  const submitBtn = ''

  function PetFactory(muzzle, isAggressive) {
    return {
      id: props.pets.length + 1,
      muzzle,
      isAggressive,
      // name,
      // species,
      // age,
      // breed,
    }
  }

  function addAnotherPet(e) {
    const pets = props.pets
    props.setPets([...pets, new PetFactory()])
    console.log(pets)
    e.preventDefault()
  }

  function submitHandler(e) {
    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'register-pet',
        textAdd,
        uploadphoto,
        visitreason,
        referred,
        isfriend,
        willbite,
        hides,
        extrahands,
        sedation,
        pet: props.pet,
      }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error))

    e.preventDefault()
  }

  return (
    <section className='add--info--section'>
      <Form>
        <div className='add--info'>
          <p className='section---heading'>
            <span className='first-word'>Additional</span>
          </p>
          <p className='question'>Mood</p>
          <div className='two--cols'>
            <div>
              <label>
                <input
                  type='checkbox'
                  value={isfriend}
                  onChange={(e) => setIsfriend(e.target.value)}
                />
                Friendly
              </label>
              <br />
              <label>
                <input
                  type='checkbox'
                  value={willbite}
                  onChange={(e) => setWillBite(e.target.value)}
                />
                Will bite or scratch when picked up
              </label>
              <br />
              <label>
                <input
                  type='checkbox'
                  value={hides}
                  onChange={(e) => setHides(e.target.value)}
                />
                Hides when around strangers
              </label>
              <br />
            </div>
            <div>
              <label>
                <input
                  type='checkbox'
                  value={aggressive}
                  onChange={(e) => setIsAggressive(e.target.value)}
                />
                Anxious/Aggressive
              </label>
              <br />
              <label>
                <input
                  type='checkbox'
                  value={extrahands}
                  onChange={(e) => setExtraHands(e.target.value)}
                />
                Requires an extra pair of hands at the vet's office
              </label>
              <br />
              <label>
                <input
                  type='checkbox'
                  value={sedation}
                  onChange={(e) => setSedation(e.target.value)}
                />
                May need sedation
              </label>
              <br />
              <label>
                <input
                  type='checkbox'
                  value={muzzle}
                  onChange={(e) => setMuzzle(e.target.value)}
                />
                Needs a muzzle
              </label>
            </div>
          </div>
          <div>
            <p className='question'>
              Please feel free to share any other additional information about
              your pet
              <textarea
                onChange={(e) => setTextAdd(e.target.value)}
                value={textAdd}
              ></textarea>
            </p>
          </div>
          <div>
            <p className='question'>
              Please upload an up-to-date photo of your pet if available
            </p>
            <input
              className='file--upload'
              value={uploadphoto}
              type='file'
              onChange={(e) => setUploadPhoto(e.target.value)}
            />
          </div>
          <div>
            <p className='question'>
              Reason for Visit
              <textarea
                onChange={(e) => setVisitReason(e.target.value)}
                value={visitreason}
                required
              ></textarea>
            </p>
          </div>
          <div>
            <p className='question'>Referred by:</p>
            <select
              id='dropDown'
              value={referred}
              onChange={(e) => setReferred(e.target.value)}
              required
            >
              <option value='select'>Select</option>
              <option value='internet'>Internet Search</option>
              <option value='google'>Google</option>
              <option value='facebook'>Facebook</option>
              <option value='instagram'>Instagram</option>
              <option value='yelp'>Yelp</option>
              <option value='nextdoor'>Nextdoor</option>
              <option value='mobile-groomer'>Mobile Groomer</option>
              <option value='referred-by-friend'>Referred by friend</option>
              <option value='past-client'>Previous Client</option>
            </select>
          </div>
        </div>
        <p className='center'>
          For additional pets please click the New Pet button below.
        </p>
        <div className='Register--btn'>
          <p onClick={addAnotherPet} className='btn add--new'>
            ADD ANOTHER PET
          </p>
          <input
            className='btn add--submit'
            type='submit'
            value='Submit'
            onClick={submitHandler}
          />
        </div>
      </Form>
    </section>
  )
}
