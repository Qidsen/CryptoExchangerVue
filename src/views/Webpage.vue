<template>
  <div class="app__wrapper">
    <router-link class="webpage__dashboard" to="/">
      &lt; Dashboard
    </router-link>
    <h1>Select items to add to the Purchase Order</h1>
    <div class="d-flex webpage__select-items">
      <el-button @click="isFiltersShow = true" class="webpage__filter" type="primary" plain>
        <FilterSvg /> Show filters
      </el-button>
      <div class="d-flex webpage__checkbox-wrapper">
        <div class="d-flex webpage__categories align-center">
          <label class="webpage__checkbox-group-label">Categories</label>
          <el-checkbox-group v-model="checkbox.categories">
            <el-checkbox label="All"></el-checkbox>
            <el-checkbox label="Products"></el-checkbox>
            <el-checkbox label="New Product"></el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="d-flex webpage__items align-center">
          <label class="webpage__checkbox-group-label">Items</label>
          <el-checkbox-group v-model="checkbox.items">
            <el-checkbox label="All"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </div>
    <h1 class="mt-8">Fill out the details for this Purchase Order</h1>
    <el-form class="webpage__form">
      <div class="webpage__form-left">
        <el-form-item label="Delivery date" :required="true">
          <el-date-picker v-model="form.date" type="date" placeholder="dd.mm.yyyy"></el-date-picker>
        </el-form-item> 
        <el-form-item label="Location" :required="true">
          <el-select v-model="form.location" placeholder="---------" :required="true">
            <el-option label="Florida" value="1"></el-option>
            <el-option label="New York" value="2"></el-option>
            <el-option label="California" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Supplier" :required="true">
          <el-dropdown v-model="form.supplier">
            <span class="el-dropdown-link">
              {{ form.supplier || "Select supplier" }}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item value="Amazon" @click="form.supplier='Amazon'">Amazon</el-dropdown-item>
              <el-dropdown-item value="eBay" @click="form.supplier='eBay'">eBay</el-dropdown-item>
              <el-dropdown-item value="AliExpress" @click="form.supplier='AliExpress'">AliExpress </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
      </div>
      <div class="webpage__form-right">
        <el-form-item label="Legal entity" :required="true">
          <el-select v-model="form.entity" placeholder="select Location first">
            <el-option label="Sole proprietorship" value="1"></el-option>
            <el-option label="Partnership" value="2"></el-option>
            <el-option label="C corporation" value="3"></el-option>
            <el-option label="Limited liability company (LLC)" value="4"></el-option>
            <template #prefix>
              <i class="el-icon-warning"></i>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="Taxes">
          <el-select v-model="form.taxes" multiple placeholder="select Taxes">
            <el-option
              v-for="item in 10"
              :key="item" 
              :label="`Vat ${item}0%`"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import FilterSvg from '@/assets/img/svg/filter.svg'

export default {
  components: {
    FilterSvg
  },
  data: () => ({
    form: {
      date: "",
      location: "",
      entity: "",
      taxes: [],
      supplier: ""
    },
    checkbox: {
      categories: [], 
      items: ""
    },
    isFiltersShow: false
  }),
}
</script>

<style lang="scss">
  .webpage__dashboard {
    text-decoration: none;
    color: #5093E1;
    font-family: Roboto;
    font-size: 14px;
    line-height: 14px;
  }
  .webpage__filter {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    border: 2px solid #B4CCE6;
    border-radius: 10px;
    svg {
      fill: #5093E1;
    }
    span {
      width: 132px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:hover, &:focus {
      svg {
        fill: white;
      }
    }
  }
  .webpage__select-items {
    justify-content: space-between;
  }
  .webpage__checkbox-wrapper {
    width: 786px;
    padding: 16px 110px 16px 24px;
    align-items: center;
    justify-content: space-between;
    background-color: #CDDAEA;
    box-shadow: 0px 2px 8px rgba(0, 0, 1, 0.15);
    border-radius: 10px;
  }
  .webpage__checkbox-group-label {
    margin-right: 16px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: #4E5361;
  }
  .el-checkbox__label {
    font-family: Roboto;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: #7C869C;
  }
  .webpage__filters-wrapper {
    width: 1308px;
    height: 322px;
    background: #CDDAEA;
    box-shadow: 0px 2px 8px rgba(0, 0, 1, 0.15);
    border-radius: 10px;  
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  .webpage__form {
    width: 100%;
    background-color: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 1, 0.15);
    border-radius: 10px;
  }
  .el-form-item__label {
    font-family: Roboto;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    color: #7C869C;
  }
</style>
