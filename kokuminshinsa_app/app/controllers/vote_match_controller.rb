class VoteMatchController < ApplicationController
  def home
  end
  def question
    @hide_header_footer = true
  end
  def result
    # 結果ページに必要なデータをビューに渡す
    @question1_answer = session[:question1_answer]
    @question2_answer = session[:question2_answer]
  end
  def sendform
    # フォームから送信された値を取得
    question1_answer = params[:question1]
    question2_answer = params[:question2]

    # セッションに回答を保存して、結果ページで使用
    session[:question1_answer] = question1_answer
    session[:question2_answer] = question2_answer

    # ここで選択された値を使って処理を行う（例: DBに保存、結果を計算など）
    

    # 結果表示ページにリダイレクト
    redirect_to votematch_result_path, notice: "Your answers have been saved"
  end
end
