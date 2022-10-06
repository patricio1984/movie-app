import Pagination from '@mui/material/Pagination';

const PaginationSize = ({setPage } : {
  setPage: any;
}) => {

  const handleChange = (page: any) => {
    setPage(page);
    window.scroll({
      top: 300,
      left: 300,
      behavior: "smooth"
    });
  }

  return (
      <Pagination 
        count={50} 
        size="large" 
        onChange={(e: any) => handleChange(Number(e.target.textContent))}
        variant="outlined"
        hideNextButton
        hidePrevButton
       />
  );
}

export default PaginationSize
