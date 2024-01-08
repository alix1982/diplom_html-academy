import React, {useState, useEffect} from "react";
import { ItemsStl } from "./items.style";
import { products } from "../../products";
import { Item } from "./item/Item";
import { Container, Pagination, PaginationItem, TextField, Stack, Link } from "@mui/material";

export const Items = ({isSizeWindow}) => {
  const NUMBER_CARDS_PAGE = 6;
  const [productsPagination, setProductsPagination] = useState([])
  const [query, setQuery] = useState('что то поискать')
  const [sort, setSort] = useState(0);
  const [pageQty, setPageQty] = useState(0);
  const [page, setPage] = useState(0);
  const [isBoundaryCount, setIsBundaryCount] = useState(1);
  const [isSiblingCount, setIsSiblingCount] = useState(1);
  const handleProducts = (e) => {
      setSort(e.target.value)
  }

  useEffect(()=> {
    setPageQty(Math.ceil (products.length / NUMBER_CARDS_PAGE));
  },[]);

  useEffect(()=> {
    (isSizeWindow !== 'desctop') ? setIsBundaryCount(0) : setIsBundaryCount(1)
  },[isSizeWindow])

  useEffect(()=> {
    (page === 0 || page === pageQty-1) && setIsSiblingCount(0);
    (page === 1 || page === pageQty-2) && setIsSiblingCount(0.5);
    (page > 1 && page < pageQty-2) && setIsSiblingCount(1);
  },[page])

  useEffect(()=> {
    const arr = new Array(pageQty).fill(0)
    arr.map((_, index) => 
      arr[index] = (products.slice((index*NUMBER_CARDS_PAGE), (index*NUMBER_CARDS_PAGE) + NUMBER_CARDS_PAGE))
    )  
    setProductsPagination(arr)
  },[pageQty])

  return (
      <ItemsStl pageFirst={page === 2 ? true : false} pageLast={(page === pageQty - 3) ? true : false}>
        <div className='items__sort'>
          <p className='items__text'>Сортировка:</p>
          <select className='items__select' onChange={(e)=>{handleProducts(e)}}>
              <option value={0}>по умолчанию</option>
              <option value={1}>по названию</option>
              <option value={2}>по цене</option>
              <option value={3}>по молоку</option>
              <option value={4}>по стране</option>
              <option value={4}>по стране</option>
          </select>  
        </div>

        <Container>
            {/* поисковая строка */}
            {/* <TextField
              fullWidth
              label='queryLabel'
              value={query}
              onChange={(e)=>{setQuery(e.target.value)}}
            /> */}
            <Stack spacing={0} direction="row" flexWrap="wrap">
              {products.length > 0 && 
                (productsPagination.length > 0 && productsPagination[page].map((product) => 
                  <Item key={product.id} product={product}/>
                ))}
              {products.length > 0 && (
              <Pagination
                // variant="outlined"
                shape="rounded"
                siblingCount={isSiblingCount}
                count={pageQty}
                boundaryCount={isBoundaryCount}
                page={page+1}
                onChange={(_, num)=>{setPage(num-1)}}
              />  
              )}
            </Stack>
        </Container>
      </ItemsStl>
  );
}
