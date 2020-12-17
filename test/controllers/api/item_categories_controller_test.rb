require 'test_helper'

class Api::ItemCategoriesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_item_categories_index_url
    assert_response :success
  end

  test "should get create" do
    get api_item_categories_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_item_categories_destroy_url
    assert_response :success
  end

  test "should get item_category_params" do
    get api_item_categories_item_category_params_url
    assert_response :success
  end

end
