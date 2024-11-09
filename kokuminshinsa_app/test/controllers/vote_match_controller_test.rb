require "test_helper"

class VoteMatchControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get votematch_path  
    assert_response :success
  end
end
