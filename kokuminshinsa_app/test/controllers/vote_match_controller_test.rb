require "test_helper"

class VoteMatchControllerTest < ActionDispatch::IntegrationTest

  def setup
    @base_title = "国民審査情報サイト"
  end

  test "should get home" do
    get votematch_path  
    assert_response :success
    assert_select "title", "VoteMatch | #{@base_title}"
  end
end
