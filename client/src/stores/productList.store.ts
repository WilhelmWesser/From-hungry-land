import type { ProductDTO, ProductTagDTO } from '@/common/types/types'
import { ProductService, ProductTagService } from '@/services/services'
import { defineStore } from 'pinia'
import { ref, computed, type ComputedRef } from 'vue'
import { StoreNames } from '@/common/enums/enums'


export const useProductListStore = defineStore(StoreNames.PRODUCTS, () => {

    const products = ref([] as ProductDTO[])
    const productTags = ref([] as ProductTagDTO[])

    const productService: ProductService = new ProductService();
    const productTagService: ProductTagService = new ProductTagService();

    const getProducts: ComputedRef<ProductDTO[]> = computed(() => products.value);
    const getProductTags: ComputedRef<string[]> = computed(() => productTags.value.map((tag: ProductTagDTO) => tag.name));
    const isProductsLoaded: ComputedRef<Boolean> = computed(() => products.value.length > 0);
    const isProductTagsLoaded: ComputedRef<Boolean> = computed(() => productTags.value.length > 0);
    
    const fetchProducts = async (options?: {
        take?: number,
        skip?: number,
        name?: string,
        filters?: string[] | string,
    }) => {
        products.value = await productService.getProducts(
            {
                take: options?.take || 20,
                skip: options?.skip || 0,
                name: options?.name,
                filters: options?.filters
            }
        )
    }

    const fetchProductTags = async () => {
        productTags.value = await productTagService.getProductTags()    
    }
    
    return {
        products,
        fetchProducts,
        getProducts,
        productTags,
        fetchProductTags,
        getProductTags
    }



})
