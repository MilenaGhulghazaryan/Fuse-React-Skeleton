import clsx from 'clsx';
import style from './FusePageSimpleHeader.module.css'
import AddSlide from './AddSlide';
import { useEffect, useRef, useState } from 'react';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { GetSlider, setShowBox } from 'app/store/fuse/OptionsSlice';
import { styled } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeepCompareEffect, useThemeMediaQuery } from '@fuse/hooks';
import SliderHeader from './SliderHeader';
import { red } from 'tailwindcss/colors';
import withReducer from 'app/store/withReducer';
import reducer from 'app/theme-layouts/shared-components/quickPanel/store';
import FusePageSimple from '@fuse/core/FusePageSimple';
import SliderContent from './SliderContent';
const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
  },
}));

function Slider(props) {
  const pageLayout = useRef(null);
  const routeParams = useParams();
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const nav = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    setRightSidebarOpen(Boolean(routeParams.id));
  }, [routeParams]);

  useEffect(() => {
    dispatch(GetSlider())
  }, [])

  return (
    <>
      <Root
        header={<SliderHeader />}
        content={<SliderContent />}
        ref={pageLayout}
        rightSidebarContent={<AddSlide />}
        rightSidebarOpen={rightSidebarOpen}
        rightSidebarOnClose={() => setRightSidebarOpen(false)}
        rightSidebarWidth={500}
        scroll={isMobile ? 'normal' : 'content'}
      />
    </>
  )
}

export default Slider;




