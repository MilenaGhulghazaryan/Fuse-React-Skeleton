import { GetElementById, GetSlider, getElementById } from "app/store/fuse/OptionsSlice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FiEdit } from 'react-icons/fi'
import style from './FusePageSimpleHeader.module.css'
import { Link } from "react-router-dom"
const SliderContent = () => {
  const slider = useSelector(state => state.slider.slider)
  const dispatch = useDispatch()
  const showBox = useSelector(state => state.slider.showBox)
  const [editId, setEditId] = useState(null)
  const id = useSelector(state => state.slider.id)
  useEffect(() => {
    dispatch(GetSlider())
  }, [])

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '15px', background: 'rgb(185, 185, 215)', overflowY: 'scroll', padding: '258px 16px'
    }}>
      {
        slider.map(({ img, pageTitle, btnTitle, addCategory, addProduct, id, title, colorBtn, colors }) => {
          return (
            <>
              <div key={id} style={{ display: 'flex', alignItems: 'center', gap: '17px' }}>
                <div className={style.datasDiv}>
                  <img src={img} alt="" />
                  <p>{title}</p>
                  <button style={{ background: colorBtn, width: '107px', height: '35px', borderRadius: '18px' }}><p style={{ color: colors }}>{btnTitle}</p></button>
                </div>
                <Link to={`${id}/edit`}>
                  <FiEdit style={{ fontSize: '1.3vw' }} onClick={() => {
                    setEditId(id)
                    dispatch(GetElementById(id))
                  }} />
                </Link>
              </div>
              <div className={style.line} style={{ marginTop: '0%' }}></div>
            </>
          )
        })
      }
    </div>
  )
}
export default SliderContent