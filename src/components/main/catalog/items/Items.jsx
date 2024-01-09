import React, {useState, useEffect} from "react";
import { ItemsStl } from "./items.style";
import { Item } from "./item/Item";
import { Container, Pagination, PaginationItem, TextField, Stack, Link } from "@mui/material";

export const Items = ({isSizeWindow, productsSort, setProductsSort}) => {
  const NUMBER_CARDS_PAGE = 6;
  const [productsPagination, setProductsPagination] = useState([])
  // const [query, setQuery] = useState('что то поискать') //для поисковой строки
  const [pageQty, setPageQty] = useState(0);
  const [isPageQty, setIsPageQty] = useState(false);

  const [page, setPage] = useState(0);
  const [isBoundaryCount, setIsBundaryCount] = useState(1);
  const [isSiblingCount, setIsSiblingCount] = useState(1);

  const [isSortTitle, setIsSortTitle] = useState(false);
  const [isSortPrice, setIsSortPrice] = useState(false);
  const [isSortMilk, setIsSortMilk] = useState(false);
  const [isSortRegion, setIsSortRegion] = useState(false);
  const [isSelect, setIsSelect] = useState(false)
  
  const sortField = ( a, b, field ) => {
    let x = '';
    let y = '';

    switch(field) {
      case 'title':
        x = a.title;
        y = b.title;
      break;
      case 'price':
        x = a.price;
        y = b.price;
      break;
      case 'milk':
        x = a.milk;
        y = b.milk;
      break;
      case 'region':
        x = a.region;
        y = b.region;
      break;
      default:
        x = '';
        y = '';
      break;
    }
    if (x < y) {return -1}
    if (x > y) {return 1}
    return 0;
  }

  const sortFields = (field, isSortField) => {
    isSortField ?
    setProductsSort(productsSort.sort((a, b)=>sortField(a, b, field))) :
    setProductsSort(productsSort.sort((b, a)=>sortField(a, b, field)))
    setIsSelect(!isSelect);
  }

  const sortTitle = () => {
    setIsSortTitle(!isSortTitle);
    sortFields('title', isSortTitle);
  }
  const sortPrice = () => {
    setIsSortPrice(!isSortPrice);
    sortFields('price', isSortPrice);
  }
  const sortMilk = () => {
    setIsSortMilk(!isSortMilk);
    sortFields('milk', isSortMilk);
  }
  const sortRegion = () => {
    setIsSortRegion(!isSortRegion);
    sortFields('region', isSortRegion);
  }

  const handleProducts = (e) => {
    e.target.value === '1' && sortTitle();
    e.target.value === '2' && sortPrice();
    e.target.value === '3' && sortMilk();
    e.target.value === '4' && sortRegion();
  }

  useEffect(()=> {
    setPageQty(Math.ceil(productsSort.length / NUMBER_CARDS_PAGE));
    setIsPageQty(!isPageQty)
  },[productsSort, productsSort.length, isSelect]);

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
      arr[index] = (productsSort.slice((index*NUMBER_CARDS_PAGE), (index*NUMBER_CARDS_PAGE) + NUMBER_CARDS_PAGE))
    )  
    setProductsPagination(arr)
  },[pageQty, isPageQty])

  return (
      <ItemsStl pageFirst={page === 2 ? true : false} pageLast={(page === pageQty - 3) ? true : false}>
        <div className='items__sort'>
          <p className='items__text'>Сортировка:</p>
          <select className='items__select' onChange={(e)=>{handleProducts(e)}}>
              <option value={0} disabled>по умолчанию</option>
              <option value={1}>по названию</option>
              <option value={2}>по цене</option>
              <option value={3}>по молоку</option>
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
              {productsSort.length > 0 && 
                (productsPagination.length > 0 && productsPagination[page].map((product) => 
                  <Item key={product.id} product={product}/>
                ))}
              {productsSort.length > 0 && (
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
