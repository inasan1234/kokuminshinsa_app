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

  test "should get question" do
    get votematch_question_path
    assert_response :success
    assert_select "title", "VoteMatch | #{@base_title}"
  end

  test "should get result" do
    get votematch_result_path
    assert_response :success
    assert_select "title", "Result | #{@base_title}"
  end
end
